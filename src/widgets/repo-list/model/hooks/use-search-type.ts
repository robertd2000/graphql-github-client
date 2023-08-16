import { StringParam, useQueryParam, withDefault } from 'use-query-params'
import { SearchType } from '../../../../shared/types'

export type SearchTypeStr = 'repositories'

export const typesMap: Record<SearchTypeStr, SearchType> = {
  repositories: SearchType.Repository,
}

export const useSearchTypeParam = () => {
  const [searchType, setSearchType] = useQueryParam(
    'type',
    withDefault(StringParam, 'repositories')
  )
  const searchTypeEnum = typesMap[searchType as SearchTypeStr]

  return {
    searchType,
    searchTypeEnum,
    setSearchType,
  }
}
