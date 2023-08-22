export interface RepoInfoData {
  repository: Repository
}

export interface Repository {
  id: string
  name: string
  url: string
  descriptionHTML: string
  licenseInfo: LicenseInfo
  labels: Labels
  securityPolicyUrl: string
  isPrivate: boolean
  viewerHasStarred: boolean
  owner: Owner
  description: string
  languages: Languages
  homepageUrl: string
  watchers: Watchers
  forkCount: number
  stargazerCount: number
  releases: Releases
  diskUsage: number
  discussions: Discussions
  updatedAt: string
  repositoryTopics: RepositoryTopics
}

export interface LicenseInfo {
  id: string
  name: string
  url: string
}

export interface Labels {
  nodes: Node[]
}

export interface Node {
  color: string
  createdAt: string
  name: string
  description?: string
}

export interface Owner {
  login: string
  avatarUrl: string
  __typename: string
}

export interface Languages {
  edges: Edge[]
  totalSize: number
  totalCount: number
}

export interface Edge {
  size: number
  node: LanguageNode
}

export interface LanguageNode {
  id: string
  color: string
  name: string
}

export interface Watchers {
  totalCount: number
}

export interface Releases {
  totalCount: number
}

export interface Discussions {
  totalCount: number
}

export interface RepositoryTopics {
  nodes: Node3[]
}

export interface Node3 {
  __typename: string
  id: string
  url: string
  topic: Topic
}

export interface Topic {
  name: string
  id: string
  stargazerCount: number
  viewerHasStarred: boolean
  repositories: Repositories
}

export interface Repositories {
  totalCount: number
}
