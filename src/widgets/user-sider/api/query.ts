import { gql } from '@apollo/client'

export const USER_CARD = gql`
  query ($login: String!) {
    user(login: $login) {
      id
      name
      login
      bioHTML
      companyHTML
      email
      url
      avatarUrl
      pronouns
      viewerIsFollowing
      location
      socialAccounts(first: 10) {
        edges {
          node {
            displayName
            provider
            url
          }
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      status {
        id
        emoji
        message
        emojiHTML
      }
    }
  }
`
