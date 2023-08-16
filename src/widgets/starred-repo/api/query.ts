import { gql } from '@apollo/client'

export const STARRED_REPO = gql`
  query ($login: String!) {
    user(login: $login) {
      starredRepositories(first: 100) {
        nodes {
          name
          id
          primaryLanguage {
            color
            name
            id
          }
          updatedAt
          stargazerCount
          viewerHasStarred
          forkCount
          isPrivate
          licenseInfo {
            id
            name
          }
          owner {
            login
            id
          }
          descriptionHTML
          repositoryTopics(first: 10) {
            nodes {
              topic {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`
