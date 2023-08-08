export interface ViewerData {
  viewer: ViewerType
}

export interface ViewerType {
  name: string
  login: string
  avatarUrl: string
  id: string
  starredRepositories: ViewerStarredRepositories
  topRepositories: ViewerTopRepositories
}

export interface ViewerTopRepositories {
  nodes: ViewerRepositoryType[]
}

export interface ViewerStarredRepositories {
  totalCount: number
}

export interface ViewerRepositoryType {
  id: string
  nameWithOwner: string
  owner: Owner
}

export interface Owner {
  avatarUrl: string
}
