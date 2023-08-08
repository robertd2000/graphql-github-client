export interface RepositoryType {
  id: string
  name: string
  owner: Owner
  descriptionHTML: string
  updatedAt: string
  stargazerCount: number
  primaryLanguage?: PrimaryLanguage
  repositoryTopics: RepositoryTopics
}

interface Owner {
  login: string
  id: string
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
