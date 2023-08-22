import { Skeleton } from '../../../../shared/components'

export const RepoInfoSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-6 w-full my-3" />

      {[...Array(8).keys()].map((i) => (
        <div key={i}>
          <div className="flex flex-wrap items-center gap-1">
            <Skeleton className="rounded-full h-[20px]" />{' '}
            <Skeleton className="h-6 w-full my-1" />
          </div>
        </div>
      ))}

      <hr className="my-6" />

      {[...Array(2).keys()].map((i) => (
        <div key={i}>
          <div className="flex flex-wrap items-center gap-1">
            <Skeleton className="rounded-full h-[20px]" />{' '}
            <Skeleton className="h-6 w-full my-1" />
          </div>
        </div>
      ))}
    </div>
  )
}
