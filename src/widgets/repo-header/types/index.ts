export interface RepoInfoData {
  user: User
}

export interface User {
  name: string
  login: string
  repositories: Repositories
  starredRepositories: StarredRepositories
}

export interface Repositories {
  totalCount: number
}

export interface StarredRepositories {
  totalCount: number
}
