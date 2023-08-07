import { gql } from '@apollo/client'

export const VIEWER = gql`
  {
    viewer {
      name
      login
      avatarUrl
      id
      starredRepositories {
        totalCount
      }
      repositories(first: 10) {
        nodes {
          id
          nameWithOwner
          owner {
            avatarUrl
          }
        }
      }
    }
  }
`
