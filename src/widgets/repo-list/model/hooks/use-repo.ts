import { useParams } from 'react-router'
import { useSearchSortParams } from '.'
import { getUserRepoList } from '../../api'
import { OrderDirection, RepositoryOrder } from '../../../../shared/types'

export const useUserRepoList = () => {
  const {
    sortOrder,
    sortField,
    availableVariants,
    currentVariant,
    setSort,
    setDefaultSort,
  } = useSearchSortParams()

  const { login } = useParams()

  const { data, loading } = getUserRepoList({
    login: login as string,
    sort: sortField || 'UPDATED_AT',
    direction: sortOrder || 'DESC',
  })

  return { data, loading }
}
