import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from '../../../../shared/components'

export const ViewerCardSkeleton = () => {
  return (
    <Card className="divide-y min-h-[250px]">
      <CardHeader className="text-center">
        <CardTitle>
          <Skeleton className=" h-[100px] w-[100px] rounded-full object-contain m-2  mx-auto" />

          <Skeleton className="h-4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 mt-3" />
      </CardContent>
    </Card>
  )
}
