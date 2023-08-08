import { gql } from '@apollo/client'

export const EXPLORE_STARRED_REPOS = gql`
  {
    viewer {
      starredRepositories(
        first: 10
        orderBy: { field: STARRED_AT, direction: DESC }
      ) {
        nodes {
          name
          owner {
            login
            id
          }
          descriptionHTML
          updatedAt
          stargazerCount
          primaryLanguage {
            color
            name
          }
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
