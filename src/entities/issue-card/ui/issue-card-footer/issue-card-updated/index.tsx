import moment from 'moment'
import { useIssueCardContext } from '../../../model'
import { DotSeparator } from '../../../../../shared/ui/dot-separator'

export const IssueCardUpdated = () => {
  const { issue } = useIssueCardContext()

  return (
    <>
      Updated on {moment(issue?.createdAt).fromNow()} <DotSeparator />
    </>
  )
}
