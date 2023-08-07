export interface ViewerData {
  viewer: ViewerType
}

export interface ViewerType {
  name: string
  login: string
  avatarUrl: string
  id: string
  starredRepositories: ViewerStarredRepositories
  repositories: ViewerRepositories
}

export interface ViewerRepositories {
  nodes: ViewerRepositoriesType[]
}

export interface ViewerStarredRepositories {
  totalCount: number
}

export interface ViewerRepositoriesType {
  id: string
  nameWithOwner: string
  owner: Owner
}

export interface Owner {
  avatarUrl: string
}
