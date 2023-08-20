export interface RepoDetailsData {
  repository: Repository
}

export interface Repository {
  id: string
  name: string
  isPrivate: boolean
  viewerHasStarred: boolean
  owner: Owner
  description: string
  languages: Languages
  issues: Issues
  homepageUrl: string
  watchers: Watchers
  forkCount: number
  stargazerCount: number
}

export interface Owner {
  login: string
  avatarUrl: string
  __typename: string
}

export interface Languages {
  nodes: Node[]
  totalCount: number
}

export interface Node {
  id: string
  name: string
  color: string
}

export interface Issues {
  totalCount: number
}

export interface Watchers {
  totalCount: number
}
