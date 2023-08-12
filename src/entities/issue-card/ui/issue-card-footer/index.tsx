import { FC, ReactNode } from 'react'
import { CardFooter } from '../../../../shared/components'
import { IssueCardAuthor } from './issue-card-author'
import { IssueCardUpdated } from './issue-card-updated'
import { IssueCardDiscussion } from './issue-card-discussion'
import { IssueCardNumber } from './issue-card-number'

interface IssueCardFooterProps {
  children?: ReactNode
}

export const IssueCardFooter: FC<IssueCardFooterProps> = ({ children }) => {
  return (
    <CardFooter>
      <IssueCardAuthor />
      <IssueCardDiscussion />
      <IssueCardUpdated />
      {children}
      <IssueCardNumber />
    </CardFooter>
  )
}
