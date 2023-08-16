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
import { RepositoryCardAvatar } from './repository-card-title/repository-card-avatar'
import { RepositoryCardNameFull } from './repository-card-title/repository-card-name-full'
import { RepositoryCardNameShort } from './repository-card-title/repository-card-name-short'

interface RepositoryCardProps {
  repository: RepositoryType
  action?: ReactNode
  footer?: ReactNode
  title?: ReactNode
  content?: ReactNode
}

export const RepositoryCard = ({
  repository,
  action,
  footer,
  title,
  content,
}: RepositoryCardProps) => {
  return (
    <RepositoryCardContext.Provider value={{ repository }}>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between align-middle items-center">
            {title}
            {action}
          </CardTitle>
        </CardHeader>
        {content}
        <RepositoryCardFooter>{footer}</RepositoryCardFooter>
      </Card>
    </RepositoryCardContext.Provider>
  )
}

RepositoryCard.Title = RepositoryCardTitle
RepositoryCard.Topics = RepositoryTopics
RepositoryCard.Footer = RepositoryCardFooter
RepositoryCard.StargazersCount = RepositoryCardStargazersCount
RepositoryCard.Updated = RepositoryCardUpdated
RepositoryCard.Content = RepositoryCardContent
RepositoryCard.Description = RepositoryCardDescription
RepositoryCard.Avatar = RepositoryCardAvatar
RepositoryCard.NameFull = RepositoryCardNameFull
RepositoryCard.NameShort = RepositoryCardNameShort

export * from './repository-card-skeleton'
