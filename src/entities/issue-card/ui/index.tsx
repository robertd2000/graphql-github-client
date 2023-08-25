import { ReactNode } from 'react'
import { Card, CardHeader } from '../../../shared/components'
import { IssueType } from '../../../shared/types/issue'
import IssueCardContext from '../model'
import { IssueCardFooter } from './issue-card-footer'
import { IssueCardOwner } from './issue-card-owner'
import { IssueCardTitle } from './issue-card-title'
import { IssueCardLabels } from './labels'

interface IssueCardProps {
  issue: IssueType
  owner?: ReactNode
  labels?: ReactNode
}

export const IssueCard = ({ issue, owner, labels }: IssueCardProps) => {
  return (
    <IssueCardContext.Provider value={{ issue }}>
      <Card>
        <CardHeader>
          <IssueCardTitle>{owner}</IssueCardTitle>
        </CardHeader>
        {labels}
        <IssueCardFooter></IssueCardFooter>
      </Card>
    </IssueCardContext.Provider>
  )
}

IssueCard.IssueOwner = IssueCardOwner
IssueCard.Labels = IssueCardLabels
