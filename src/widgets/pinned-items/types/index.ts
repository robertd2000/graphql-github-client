import { RepositoryType } from '../../../shared/types'

export interface PinnedItemsListData {
  user: User
}

export interface User {
  id: string
  pinnedItems: PinnedItems
}

export interface PinnedItems {
  nodes: RepositoryType[]
}

export interface Node {
  name: string
  isPrivate: boolean
  id: string
  descriptionHTML: string
  primaryLanguage: PrimaryLanguage
  stargazers: Stargazers
  forks: Forks
}

export interface PrimaryLanguage {
  color: string
  id: string
  name: string
}

export interface Stargazers {
  totalCount: number
}

export interface Forks {
  totalCount: number
}
