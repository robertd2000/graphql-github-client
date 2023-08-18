import { useParams } from 'react-router'
import { getOrgHeader } from '../api'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../shared/components/ui/avatar'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../shared/components'
import { FollowOrg } from '../../../features/follow-org'
import OrgHeaderContext from '../model'
import { Organization } from '../type'
import { OrgFooter } from './footer'
import { OrgHeaderSkeleton } from './skeleton'

export const OrgHeader = () => {
  const { login } = useParams()
  const { data, loading } = getOrgHeader(login as string)

  return loading ? (
    <OrgHeaderSkeleton />
  ) : (
    <div className="flex flex-wrap justify-between items-center">
      <OrgHeaderContext.Provider value={{ org: data as Organization }}>
        <div className="flex flex-wrap gap-2">
          <Avatar className="w-[8rem] h-[8rem] shadow-lg mt-4 rounded">
            <AvatarImage src={data?.avatarUrl} />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle>
                <h2>{data?.name}</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.descriptionHTML as string,
                }}
              />
            </CardContent>
            <OrgFooter />
          </Card>
        </div>
      </OrgHeaderContext.Provider>

      <div>
        <FollowOrg
          className="text-md font-semibold"
          organizationId={data?.id as string}
          viewerHasFollowed={data?.viewerIsFollowing as boolean}
        />
      </div>
    </div>
  )
}
