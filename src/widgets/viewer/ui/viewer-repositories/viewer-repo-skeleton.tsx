import { CommandItem, Skeleton } from '../../../../shared/components'

export const ViewerRepoSkeleton = () => {
  return [...Array(10).keys()].map((i) => (
    <CommandItem key={i} className="block align-middle gap-2">
      <div className="w-[12px] h-[12px] mb-2">
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
      <div className="flex items-center">
        <Skeleton className="h-4 w-[200px] ml-14" />
      </div>
    </CommandItem>
  ))
}
