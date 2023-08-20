import { Skeleton } from '../../../../shared/components'

export const RepoSkeleton = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-xl flex flex-wrap gap-2 items-center">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <Skeleton />
      </div>
      <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />

      <Skeleton className="h-4 w-[250px]" />

      <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />
    </>
  )
}
