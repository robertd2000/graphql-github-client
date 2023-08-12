import { Card, CardContent, CardHeader } from '../../../shared/components'
import { trimText } from '../../../shared/lib/text'
import { DiscussionType } from '../../../shared/types/discussion'
import DiscussionCardContext from '../model'
import { DiscussionCardFooter } from './discussion-card-footer'
import { DiscussionCardTitle } from './discussion-card-title'

interface DiscussionCardProps {
  discussion: DiscussionType
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  return (
    <DiscussionCardContext.Provider value={{ discussion }}>
      <Card>
        <CardHeader>
          <DiscussionCardTitle />
        </CardHeader>
        <CardContent>
          <div
            dangerouslySetInnerHTML={{
              __html: trimText(discussion.body, 199),
            }}
          />
        </CardContent>
        <DiscussionCardFooter />
      </Card>
    </DiscussionCardContext.Provider>
  )
}
