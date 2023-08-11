import { gql } from '@apollo/client'

export const EXPLORE_STARRED_REPOS = gql`
  {
    viewer {
      starredRepositories(
        first: 10
        orderBy: { field: STARRED_AT, direction: DESC }
      ) {
        nodes {
          id
          name
          owner {
            login
            id
            avatarUrl
          }
          descriptionHTML
          updatedAt
          viewerHasStarred
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
