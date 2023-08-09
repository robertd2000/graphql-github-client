import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Skeleton,
} from '../../../shared/components'

export const RepositoryCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between align-middle items-center">
          <Skeleton className="h-4 w-[40%]" />

          <Skeleton className="h-4 w-[40%]" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[80%] mb-2" />
        <Skeleton className="h-4 w-[80%]" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-[80%]" />
      </CardFooter>
    </Card>
  )
}
