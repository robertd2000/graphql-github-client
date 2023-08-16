import { gql } from '@apollo/client'

export const REPO_LIST = gql`
  query (
    $login: String!
    $sort: RepositoryOrderField!
    $direction: OrderDirection!
  ) {
    user(login: $login) {
      repositories(
        first: 100
        orderBy: { field: $sort, direction: $direction }
      ) {
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
