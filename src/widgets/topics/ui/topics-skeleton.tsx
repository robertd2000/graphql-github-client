import { CommandItem, Skeleton } from '../../../shared/components'

export const TopicsSkeleton = () => {
  return [...Array(5).keys()].map((i) => (
    <CommandItem key={i} className="block align-middle gap-1">
      <div className="flex gap-2 align-middle mb-1">
        <div className="w-[30px] h-[30px]">
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        <div className="flex items-center ml-4">
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground ml-14">
        <Skeleton className="h-4 w-[80%] mb-2" />
        <Skeleton className="h-4 w-[80%]" />
      </p>
    </CommandItem>
  ))
}
