import { gql } from '@apollo/client'

export const REPO_INFO = gql`
  query ($login: String!) {
    user(login: $login) {
      name
      login

      repositories(first: 100) {
        totalCount
      }
      starredRepositories(first: 100) {
        totalCount
      }
    }
  }
`
