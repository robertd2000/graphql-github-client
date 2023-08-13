import { gql } from '@apollo/client'

export const PINNED_ITEMS = gql`
  query ($login: String!) {
    user(login: $login) {
      id
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            id
            name
            url
            owner {
              id
              login
              avatarUrl
            }
            descriptionHTML
            updatedAt
            primaryLanguage {
              name
              color
            }
            viewerHasStarred
            stargazerCount
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
  }
`
