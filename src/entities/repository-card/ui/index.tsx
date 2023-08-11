import { ReactNode } from 'react'

import { RepositoryType } from '../../../shared/types'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../shared/components'
import { StarRepoButton } from '../../../features/star-repo/ui'
import RepositoryCardContext from '../model'
import { RepositoryTopics } from './repository-topics'
import { RepositoryCardFooter } from './repository-card-footer'
import { RepositoryCardTitle } from './repository-card-title'
import { RepositoryCardStargazersCount } from './repository-card-footer/repository-card-stargazers-count'

interface RepositoryCardProps {
  repository: RepositoryType
  topics?: ReactNode
}

export const RepositoryCard = ({ repository, topics }: RepositoryCardProps) => {
  return (
    <RepositoryCardContext.Provider value={{ repository }}>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between align-middle items-center">
            <RepositoryCardTitle />

            <StarRepoButton
              id={repository.id}
              viewerHasStarred={repository.viewerHasStarred}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            dangerouslySetInnerHTML={{ __html: repository.descriptionHTML }}
          ></p>
          {topics}
        </CardContent>
        <RepositoryCardFooter>
          <RepositoryCard.StargazersCount />
        </RepositoryCardFooter>
      </Card>
    </RepositoryCardContext.Provider>
  )
}

RepositoryCard.Topics = RepositoryTopics
RepositoryCard.Footer = RepositoryCardFooter
RepositoryCard.StargazersCount = RepositoryCardStargazersCount

export * from './repository-card-skeleton'
