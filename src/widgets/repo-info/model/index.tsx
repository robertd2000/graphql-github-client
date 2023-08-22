import { createContext, useContext } from 'react'
import { Repository } from '../types'

const RepositoryInfoContext = createContext<{
  repository: Repository
} | null>(null)

export const useRepositoryInfoContext = () => {
  const context = useContext(RepositoryInfoContext)

  if (!context)
    throw new Error(
      'Use RepositoryyInfo* component inside RepositoryyInfoContext'
    )

  return context
}

export default RepositoryInfoContext
