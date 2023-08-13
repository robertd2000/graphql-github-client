import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '../../../shared/components'
import { getTopics } from '../api'
import { TopicNames } from './topics-names'
import { TopicsSkeleton } from './topics-skeleton'

export const Topics = () => {
  const { data, loading } = getTopics()

  return (
    <Command className="rounded-lg border shadow-md h-fit">
      <CommandList>
        <CommandGroup heading="Topics" className="divide-y">
          {loading ? (
            <TopicsSkeleton />
          ) : (
            data?.map((topic) => (
              <CommandItem key={topic.id} className="block align-middle gap-1">
                <div className="flex gap-2 align-middle mb-1">
                  <div className="w-[30px] h-[30px]">
                    <img
                      className="object-contain w-30 h-30 rounded-full"
                      src={
                        topic.owner.avatarUrl ||
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'
                      }
                      alt=""
                    />
                  </div>
                  <TopicNames
                    nameWithOwner={topic.nameWithOwner}
                    repoId={topic.id}
                    ownerId={topic.owner.login}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </CommandItem>
            ))
          )}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
