import { RepositoryType } from '../../../shared/types'

export interface RepoListData {
  user: User
}

export interface User {
  repositories: Repositories
}

export interface Repositories {
  nodes: RepositoryType[]
}
