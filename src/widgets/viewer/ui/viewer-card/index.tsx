import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../shared/components'
import { FC } from 'react'
import { ViewerType } from '../..'
import { ViewerCardSkeleton } from './viewer-card-skeleton'

export interface ViewerCardProps {
  data: ViewerType | undefined
  loading: boolean
}

export const ViewerCard: FC<ViewerCardProps> = ({ data, loading }) => {
  return loading ? (
    <ViewerCardSkeleton />
  ) : (
    <Card className="divide-y">
      <CardHeader className="text-center">
        <CardTitle>
          <img
            src={data?.avatarUrl}
            className="object-contain rounded-full m-2 w-[100px]  mx-auto"
            alt="avatar"
          />
          {data?.name}
        </CardTitle>
        <CardDescription>{data?.login}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to="/stars" className="text-blue-500 hover:underline">
          {data?.starredRepositories.totalCount} starred repositories
        </Link>
      </CardContent>
    </Card>
  )
}
