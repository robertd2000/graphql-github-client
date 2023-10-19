import { gql } from "@apollo/client";

export const REPO_LIST = gql`
  query (
    $login: String!
    $sort: RepositoryOrderField!
    $direction: OrderDirection!
    $first: Int!
    $after: String
  ) {
    user(login: $login) {
      repositories(
        first: $first
        after: $after
        orderBy: { field: $sort, direction: $direction }
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes {
          name
          id
          primaryLanguage {
            color
            name
            id
          }
          owner {
            id
            login
            avatarUrl
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
`;
