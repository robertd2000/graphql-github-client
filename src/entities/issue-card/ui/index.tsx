import { Card, CardHeader } from '../../../shared/components'
import { IssueType } from '../../../shared/types/issue'
import IssueCardContext from '../model'
import { IssueCardFooter } from './issue-card-footer'
import { IssueCardTitle } from './issue-card-title'

interface IssueCardProps {
  issue: IssueType
}

export const IssueCard = ({ issue }: IssueCardProps) => {
  return (
    <IssueCardContext.Provider value={{ issue }}>
      <Card>
        <CardHeader>
          <IssueCardTitle />
        </CardHeader>
        <IssueCardFooter></IssueCardFooter>
      </Card>
    </IssueCardContext.Provider>
  )
}
