import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../shared/components'
import { getViewer } from '../api'

export const ViewerCard = () => {
  const { data } = getViewer()

  return (
    <Card>
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
        <Link to="/stars">
          {data?.starredRepositories.totalCount} starred repositories
        </Link>
      </CardContent>
    </Card>
  )
}
