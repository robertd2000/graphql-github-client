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
    }
  }
`
