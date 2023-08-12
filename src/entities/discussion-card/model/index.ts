import { createContext, useContext } from 'react'
import { DiscussionType } from '../../../shared/types/discussion'

const DiscussionCardContext = createContext<{
  discussion: DiscussionType
} | null>(null)

export const useDiscussionCardContext = () => {
  const context = useContext(DiscussionCardContext)

  if (!context)
    throw new Error('Use IssueCard* component ibside IssueCardContext')

  return context
}

export default DiscussionCardContext
