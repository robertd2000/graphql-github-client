import { Card, Skeleton } from '../../../../shared/components'

export const OrgHeaderSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex flex-wrap gap-2">
        <Skeleton className="w-[8rem] h-[8rem] shadow-lg mt-4 rounded" />

        <Card className="border-none shadow-none">
          <Skeleton className="h-4 w-full my-2" />
          <Skeleton className="h-4 w-full my-2" />
          <Skeleton className="h-4 w-full my-2" />
          <Skeleton className="h-4 w-full my-2" />
          <Skeleton className="h-4 w-[250px] my-2" />
          <Skeleton className="h-4 w-[250px] my-2" />
        </Card>
      </div>
    </div>
  )
}
