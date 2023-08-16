import { RepositoryType } from '../../../shared/types'

export interface StarredRepositoriesData {
  user: User
}

export interface User {
  starredRepositories: StarredRepositories
}

export interface StarredRepositories {
  nodes: RepositoryType[]
}
