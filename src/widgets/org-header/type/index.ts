export interface OrgHeaderData {
  organization: Organization
}

export interface Organization {
  id: string
  isVerified: boolean
  name: string
  login: string
  email: any
  url: string
  avatarUrl: string
  viewerIsFollowing: boolean
  location: any
  descriptionHTML: string
  websiteUrl: string
}
