import { FC } from 'react'

import { Link } from 'react-router-dom'
import { RepositoryTopics } from './repository-topics'
import { RepositoryType } from '../../shared/types'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../shared/components'
import { StarRepoButton } from '../../features/star-repo/ui'

interface RepositoryCardProps {
  repository: RepositoryType
}
export const RepositoryCard: FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between align-middle items-center">
          <div className="flex gap-2 text-lg break-all max-w-[80%]">
            <Link
              to={`/user/${repository.owner.id}`}
              className="text-blue-400 break-words"
            >
              {repository.owner.login}
            </Link>{' '}
            /{' '}
            <Link
              to={`/repository/${repository.id}`}
              className="text-blue-500 font-semibold break-words"
            >
              {repository.name}
            </Link>
          </div>

          <StarRepoButton
            count={repository.stargazerCount}
            id={repository.id}
            viewerHasStarred={repository.viewerHasStarred}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p dangerouslySetInnerHTML={{ __html: repository.descriptionHTML }}></p>
        <RepositoryTopics
          repositoryTopics={repository.repositoryTopics.nodes}
        />
      </CardContent>
      <CardFooter>
        Updated on {repository.updatedAt}
        <div
          className={`w-3 h-3 rounded-full ml-4 mr-1`}
          style={{
            backgroundColor: repository.primaryLanguage?.color,
          }}
        />{' '}
        {repository.primaryLanguage?.name}
      </CardFooter>
    </Card>
  )
}

export * from './repository-card-skeleton'
