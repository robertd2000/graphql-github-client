import { ReactNode } from 'react'
import { Card, CardHeader } from '../../../shared/components'
import { IssueType } from '../../../shared/types/issue'
import IssueCardContext from '../model'
import { IssueCardFooter } from './issue-card-footer'
import { IssueCardOwner } from './issue-card-owner'
import { IssueCardTitle } from './issue-card-title'

interface IssueCardProps {
  issue: IssueType
  owner?: ReactNode
}

export const IssueCard = ({ issue, owner }: IssueCardProps) => {
  return (
    <IssueCardContext.Provider value={{ issue }}>
      <Card>
        <CardHeader>
          <IssueCardTitle>{owner}</IssueCardTitle>
        </CardHeader>
        <IssueCardFooter></IssueCardFooter>
      </Card>
    </IssueCardContext.Provider>
  )
}

IssueCard.IssueOwner = IssueCardOwner
