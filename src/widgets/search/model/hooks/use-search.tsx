import { usePageParam, useSearchQueryParam } from '.'
import { PAGE_SIZE } from '../../consts'

export const useSearch = () => {
  const { searchQuery } = useSearchQueryParam()
  const { page, setPage } = usePageParam()

  const handlePageChange: typeof setPage = (page) => {
    setPage(page)
  }

  return {
    query: `${searchQuery}`,
    page,
    handlePageChange,
    first: PAGE_SIZE,
    type: 'REPOSITORY',
    after: btoa(`cursor:${(page - 1) * PAGE_SIZE}`),
  }
}
