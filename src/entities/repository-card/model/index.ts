import { createContext, useContext } from 'react'
import { RepositoryType } from '../../../shared/types'

const RepositoryCardContext = createContext<{
  repository: RepositoryType
} | null>(null)

export const useRepositoryCardContext = () => {
  const context = useContext(RepositoryCardContext)

  if (!context)
    throw new Error(
      'Use RepositoryCard* component ibside RepositoryCardContext'
    )

  return context
}

export default RepositoryCardContext
