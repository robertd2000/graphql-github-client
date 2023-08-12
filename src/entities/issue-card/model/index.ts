import { createContext, useContext } from 'react'
import { IssueType } from '../../../shared/types/issue'

const IssueCardContext = createContext<{
  issue: IssueType
} | null>(null)

export const useIssueCardContext = () => {
  const context = useContext(IssueCardContext)

  if (!context)
    throw new Error('Use IssueCard* component ibside IssueCardContext')

  return context
}

export default IssueCardContext
