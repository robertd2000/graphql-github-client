import { usePageParam, useSearchQueryParam, useSearchTypeParam } from '.'
import { PAGE_SIZE } from '../../consts'

export const useSearch = () => {
  const { searchQuery } = useSearchQueryParam()
  const { page, setPage, setDefaultPage } = usePageParam()
  const { searchType, searchTypeEnum, setSearchType } = useSearchTypeParam()

  const handlePageChange: typeof setPage = (page) => {
    setPage(page)
  }

  const handleTypeChange: typeof setSearchType = (type) => {
    setSearchType(type)
    // setDefaultSort();
  }

  return {
    query: `${searchQuery}`,
    type: searchTypeEnum,
    page,
    handlePageChange,
    first: PAGE_SIZE,
    after: btoa(`cursor:${(page - 1) * PAGE_SIZE}`),
    handleTypeChange,
    typeLiteral: searchType,
  }
}
