export interface TopicData {
  search: TopicSearch
}

export interface TopicSearch {
  repositoryCount: number
  nodes: TopicNode[]
}

export interface TopicNode {
  id: string
  nameWithOwner: string
  description: string
  updatedAt: string
  createdAt: string
  diskUsage: number
  forkCount: number
  stargazerCount: number
  url: string
  owner: TopicOwner
  primaryLanguage?: TopicPrimaryLanguage
  viewerHasStarred: boolean
}

export interface TopicOwner {
  id: string
  login: string
  avatarUrl: string
}

export interface TopicPrimaryLanguage {
  name: string
  color: string
}
