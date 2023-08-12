import { MessagesSquare } from 'lucide-react'
import { useIssueCardContext } from '../../../model'
import { formatNumber } from '../../../../../shared/lib/numbers'
import { DotSeparator } from '../../../../../shared/ui/dot-separator'

export const IssueCardDiscussion = () => {
  const { issue } = useIssueCardContext()

  return issue?.comments?.totalCount ? (
    <div className="flex gap-1">
      <MessagesSquare /> {formatNumber(issue?.comments?.totalCount)}
      <DotSeparator />
    </div>
  ) : null
}
