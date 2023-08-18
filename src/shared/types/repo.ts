export interface RepositoryType {
  id: string
  name: string
  owner: Owner
  descriptionHTML: string
  updatedAt: string
  stargazerCount: number
  viewerHasStarred: boolean
  primaryLanguage?: PrimaryLanguage
  repositoryTopics: RepositoryTopics
  isPrivate: boolean
}

export interface Owner {
  id: string
  login: string
  avatarUrl: string
  __typename: string
}

interface PrimaryLanguage {
  color: string
  name: string
}

interface RepositoryTopics {
  nodes: RepositoryTopicNode[]
}

export interface RepositoryTopicNode {
  topic: Topic
}

interface Topic {
  id: string
  name: string
}

export interface PageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  endCursor: string
  startCursor: string
}
