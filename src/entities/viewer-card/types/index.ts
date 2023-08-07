export interface ViewerData {
  viewer: Viewer
}

export interface Viewer {
  name: string
  login: string
  avatarUrl: string
  id: string
  starredRepositories: ViewerStarredRepositories
}

export interface ViewerStarredRepositories {
  totalCount: number
}
