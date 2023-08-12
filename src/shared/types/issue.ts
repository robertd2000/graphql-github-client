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
}

export interface Labels {
  nodes: Node[]
}

export interface Node {
  name: string
  id: string
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
