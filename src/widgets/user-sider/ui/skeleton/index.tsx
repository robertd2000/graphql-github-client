import { Card, CardContent, Skeleton } from '../../../../shared/components'

export const UserSiderSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[22rem] h-[22rem] shadow-md mt-4 rounded-full" />

      <Card className="border-none shadow-none my-6">
        <CardContent className="text-lg">
          <Skeleton className="h-4 w-[250px] my-2" />
          <Skeleton className="h-4 w-[250px] my-2" />
          <Skeleton className="h-4 w-[250px] my-4" />
          <Skeleton className="h-4 w-[200px] my-4" />
          <Skeleton className="h-4 w-[200px] my-2" />
          <Skeleton className="h-4 w-[200px] my-2" />
          <Skeleton className="h-4 w-[200px] my-2" />
        </CardContent>
      </Card>
    </div>
  )
}
