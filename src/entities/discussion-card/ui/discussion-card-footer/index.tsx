import { CardFooter } from '../../../../shared/components'
import { DiscussionCardAuthor } from './discussion-card-author'
import { DiscussionCardComments } from './discussion-card-comments'
import { DiscussionCardUpdated } from './discussion-card-update'

export const DiscussionCardFooter = () => {
  return (
    <CardFooter className="gap-2">
      <DiscussionCardAuthor />
      <DiscussionCardUpdated />
      <DiscussionCardComments />
    </CardFooter>
  )
}
