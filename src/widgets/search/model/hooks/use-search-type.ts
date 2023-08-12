import { StringParam, useQueryParam, withDefault } from 'use-query-params'
import { SearchType } from '../../../../shared/types'

export type SearchTypeStr = 'repositories' | 'users' | 'issues' | 'discussions'

export const typesMap: Record<SearchTypeStr, SearchType> = {
  repositories: SearchType.Repository,
  users: SearchType.User,
  discussions: SearchType.Discussion,
  issues: SearchType.Issue,
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
