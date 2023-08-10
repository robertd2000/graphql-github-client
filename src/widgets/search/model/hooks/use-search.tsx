import { usePageParam, useSearchQueryParam } from '.'

export const useSearch = () => {
  const { searchQuery } = useSearchQueryParam()
  const { page, setPage, setDefaultPage } = usePageParam()

  const handlePageChange: typeof setPage = (page) => {
    setPage(page)
  }

  return {
    query: `${searchQuery}`,
    page,
    handlePageChange,
    setDefaultPage,
  }
}
