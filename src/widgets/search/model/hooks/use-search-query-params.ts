import { StringParam, useQueryParam, withDefault } from 'use-query-params'

export const useSearchQueryParam = () => {
  const [searchQuery, setSearchQuery] = useQueryParam(
    'q',
    withDefault(StringParam, '')
  )
  return {
    searchQuery,
    setSearchQuery,
  }
}
