import { gql } from '@apollo/client'

export const ORG_HEADER = gql`
  query ($login: String!) {
    organization(login: $login) {
      id
      name
      login
      email
      isVerified
      url
      avatarUrl
      viewerIsFollowing
      location
      descriptionHTML
      websiteUrl
    }
  }
`
