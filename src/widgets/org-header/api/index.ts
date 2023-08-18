import { useQuery } from '@apollo/client'
import { ORG_HEADER } from './query'
import { OrgHeaderData } from '../type'

export const getOrgHeader = (login: string) => {
  const { data, loading } = useQuery<OrgHeaderData>(ORG_HEADER, {
    variables: {
      login,
    },
  })

  return { data: data?.organization, loading }
}
