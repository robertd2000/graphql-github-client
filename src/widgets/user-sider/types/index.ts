export interface UserSidebar {
  user: User
}

export interface User {
  name: string
  login: string
  bioHTML: string
  companyHTML: string
  email: string
  url: string
  avatarUrl: string
  location: string
  socialAccounts: SocialAccounts
  followers: Followers
  following: Following
  status: Status
  pronouns: string
}

export interface SocialAccounts {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  displayName: string
  provider: string
  url: string
}

export interface Followers {
  totalCount: number
}

export interface Following {
  totalCount: number
}

export interface Status {
  id: string
  emoji: string
  message: string
  emojiHTML: string
}
