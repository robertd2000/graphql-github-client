import { ReactNode } from 'react'

import { RepositoryType } from '../../../shared/types'
import { Card, CardHeader, CardTitle } from '../../../shared/components'
import RepositoryCardContext from '../model'
import { RepositoryTopics } from './repository-topics'
import { RepositoryCardFooter } from './repository-card-footer'
import { RepositoryCardTitle } from './repository-card-title'
import { RepositoryCardStargazersCount } from './repository-card-footer/repository-card-stargazers-count'
import { RepositoryCardUpdated } from './repository-card-footer/repository-card-updated'
import { RepositoryCardContent } from './repository-card-content'
import { RepositoryCardDescription } from './repository-card-content/repository-card-description'

interface RepositoryCardProps {
  repository: RepositoryType
  action?: ReactNode
  footer?: ReactNode
  repoType?: ReactNode
  content?: ReactNode
}

export const RepositoryCard = ({
  repository,
  action,
  footer,
  repoType,
  content,
}: RepositoryCardProps) => {
  return (
    <RepositoryCardContext.Provider value={{ repository }}>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between align-middle items-center">
            <RepositoryCardTitle>{repoType}</RepositoryCardTitle>
            {action}
          </CardTitle>
        </CardHeader>
        {content}
        <RepositoryCardFooter>{footer}</RepositoryCardFooter>
      </Card>
    </RepositoryCardContext.Provider>
  )
}

RepositoryCard.Topics = RepositoryTopics
RepositoryCard.Footer = RepositoryCardFooter
RepositoryCard.StargazersCount = RepositoryCardStargazersCount
RepositoryCard.Updated = RepositoryCardUpdated
RepositoryCard.Content = RepositoryCardContent
RepositoryCard.Description = RepositoryCardDescription

export * from './repository-card-skeleton'
