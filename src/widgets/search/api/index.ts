import { useQuery } from '@apollo/client'
import { SEARCH_QUERY } from './query'
import { SearchConfig, SearchData } from '../types'

export const getSearchQuery = (searchConfig: SearchConfig) => {
  const { data, loading, fetchMore } = useQuery<SearchData>(
    SEARCH_QUERY,
    searchConfig
  )

  return {
    data: data?.search,
    loading,
    fetchMore,
  }
}
