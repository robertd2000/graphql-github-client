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
      topRepositories(
        first: 10
        orderBy: { direction: ASC, field: UPDATED_AT }
      ) {
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
