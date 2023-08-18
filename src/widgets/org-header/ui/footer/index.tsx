import { Link, Mail, MapPin } from 'lucide-react'
import { useOrgHeaderContext } from '../../model'
import { Badge } from '../../../../shared/components'

export const OrgFooter = () => {
  const { org } = useOrgHeaderContext()
  return (
    <div className="flex flex-wrap gap-2 ml-5 items-center">
      {org?.location && (
        <>
          <MapPin /> {org?.location}
        </>
      )}
      {org?.websiteUrl && (
        <>
          <Link /> <a href={org?.websiteUrl}>{org?.websiteUrl}</a>
        </>
      )}
      {org?.email && (
        <>
          <Mail /> <a href={org?.email}>{org?.email}</a>
        </>
      )}
      {org?.isVerified && (
        <Badge className="text-green-500 border-green-500 text-md">
          Verified
        </Badge>
      )}
    </div>
  )
}
