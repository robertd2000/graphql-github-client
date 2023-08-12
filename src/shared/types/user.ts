export interface UserType {
  id: string
  login: string
  bio: any
  avatarUrl: string
  viewerIsFollowing: boolean
  name: string
  repositories: Repositories
  followers: Followers
  location: string
}

export interface Repositories {
  totalCount: number
}

export interface Followers {
  totalCount: number
}
