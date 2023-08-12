import { MessagesSquare } from 'lucide-react'
import { useDiscussionCardContext } from '../../../model'
import { formatNumber } from '../../../../../shared/lib/numbers'

export const DiscussionCardComments = () => {
  const { discussion } = useDiscussionCardContext()

  return (
    <div className="flex gap-1">
      <MessagesSquare /> {formatNumber(discussion?.comments?.totalCount)}
    </div>
  )
}
