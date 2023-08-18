import { useParams } from 'react-router'
import { useSearchSortParams } from '.'
import { PAGE_SIZE } from '../../../search/consts'
import { usePageParam } from './use-pagination'

export const useUserRepoList = () => {
  const { sortOrder, sortField } = useSearchSortParams()

  const { page, setPage } = usePageParam()

  const { login } = useParams()

  return {
    first: PAGE_SIZE,
    // after: btoa(`cursor:${(page - 1) * PAGE_SIZE}`),
    // after: 'Y3Vyc29yOjEwMA==',
    after: page,
    setPage,
    page,
    login: login as string,
    sort: sortField || 'UPDATED_AT',
    direction: sortOrder || 'DESC',
  }
}
