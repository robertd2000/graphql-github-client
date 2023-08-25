import { CardDescription } from '../../../../shared/components'
import { useIssueCardContext } from '../../model'

export const IssueCardOwner = () => {
  const { issue } = useIssueCardContext()

  return (
    <CardDescription>
      {issue?.repository?.owner?.login} / {issue?.repository?.name}
    </CardDescription>
  )
}
