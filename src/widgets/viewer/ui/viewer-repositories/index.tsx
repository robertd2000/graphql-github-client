import { FC } from 'react'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '../../../../shared/components'
import { ViewerRepositoriesType } from '../..'
import { Link } from 'react-router-dom'

export interface ViewerRepositoriesProps {
  repositories: ViewerRepositoriesType[] | undefined
  loading: boolean
}

export const ViewerRepositories: FC<ViewerRepositoriesProps> = ({
  repositories,
  loading,
}) => {
  return (
    <Command className="rounded-lg border shadow-md mt-4">
      <CommandList>
        <CommandGroup heading="Top Repositories" className="divide-y">
          {repositories?.map((repo) => (
            <CommandItem key={repo.id} className="align-middle gap-1">
              <div className="w-[30px] h-[30px]">
                <img
                  className="object-contain w-30 h-30 rounded-full"
                  src={
                    repo.owner.avatarUrl ||
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'
                  }
                  alt=""
                />
              </div>
              <div className=" flex items-center">
                <Link to={`/repository/${repo.id}`}>{repo.nameWithOwner}</Link>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>{' '}
    </Command>
  )
}
