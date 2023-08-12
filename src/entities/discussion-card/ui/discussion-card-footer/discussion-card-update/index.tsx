import { useDiscussionCardContext } from '../../../model'
import moment from 'moment'
import { DotSeparator } from '../../../../../shared/ui/dot-separator'

export const DiscussionCardUpdated = () => {
  const { discussion } = useDiscussionCardContext()

  return (
    <>
      Updated on {moment(discussion?.createdAt).fromNow()} <DotSeparator />
    </>
  )
}
