import { RepositoryType } from '../../../shared/types'

export interface SearchConfig {
  variables: {
    query: string
    type: string
    first: number
    after?: string
  }
}

export interface SearchData {
  search: Search
}

export interface Search {
  userCount: number
  repositoryCount: number
  nodes: RepositoryType[]
}

export interface PrimaryLanguage {
  name: string
  color: string
}
