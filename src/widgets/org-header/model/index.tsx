import { createContext, useContext } from 'react'
import { Organization } from '../type'

const OrgHeaderContext = createContext<{
  org: Organization
} | null>(null)

export const useOrgHeaderContext = () => {
  const context = useContext(OrgHeaderContext)

  if (!context)
    throw new Error('Use OrgHeaderContext* component ibside OrgHeaderContext')

  return context
}

export default OrgHeaderContext
