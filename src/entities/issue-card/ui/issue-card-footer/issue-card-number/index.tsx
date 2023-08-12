import { useIssueCardContext } from '../../../model'

export const IssueCardNumber = () => {
  const { issue } = useIssueCardContext()

  return <div className="flex gap-1">#{issue.number}</div>
}
