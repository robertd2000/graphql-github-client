export interface IssueType {
  id: string
  title: string
  closedAt: any
  createdAt: string
  closed: boolean
  labels: Labels
  repository: Repository
  author: Author
  number: number
  comments: {
    totalCount: number
  }
  milestone: Milestone
  state: 'OPEN' | 'CLOSED'
}

export interface Labels {
  nodes: Node[]
}

export interface Node {
  name: string
  color: string
  id: string
  url: string
}

export interface Repository {
  name: string
  owner: Owner
}

export interface Owner {
  login: string
}

export interface Author {
  login: string
  url: string
  avatarUrl: string
  resourcePath: string
}

interface Milestone {
  id: string
  title: string
}
