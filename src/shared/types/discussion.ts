export interface DiscussionType {
  id: string
  title: string
  createdAt: string
  repository: Repository
  author: Author
  body: string
  comments: Comments
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

export interface Comments {
  totalCount: number
}
