import { usePageParam, useSearchQueryParam, useSearchTypeParam } from '.'
import { PAGE_SIZE } from '../../consts'
import { useSearchSortParams } from './use-sort-search'

export const useSearch = () => {
  const { searchQuery } = useSearchQueryParam()
  const { page, setPage, setDefaultPage } = usePageParam()
  const { searchType, searchTypeEnum, setSearchType } = useSearchTypeParam()
  const { sortOrder, sortField, setSort, setDefaultSort } =
    useSearchSortParams()

  const handlePageChange: typeof setPage = (page) => {
    setPage(page)
  }

  const handleTypeChange: typeof setSearchType = (type) => {
    setSearchType(type)
    setDefaultSort()
  }

  const handleSortChange: typeof setSort = (variant) => {
    setSort(variant)
    setDefaultPage()
  }

  console.log('sortField', sortField)

  return {
    query: `${searchQuery} sort:${sortField}-${sortOrder}`,
    queryClean: searchQuery,
    type: searchTypeEnum,
    page,
    handlePageChange,
    first: PAGE_SIZE,
    after: btoa(`cursor:${(page - 1) * PAGE_SIZE}`),
    handleTypeChange,
    typeLiteral: searchType,
    searchType,
    handleSortChange,
  }
}
