import { createContext, useContext } from 'react'
import { Repository } from '../types'

const RepositoryDetailsContext = createContext<{
  repository: Repository
} | null>(null)

export const useRepositoryCardContext = () => {
  const context = useContext(RepositoryDetailsContext)

  if (!context)
    throw new Error(
      'Use RepositoryyDetails* component inside RepositoryyDetailsContext'
    )

  return context
}

export default RepositoryDetailsContext
