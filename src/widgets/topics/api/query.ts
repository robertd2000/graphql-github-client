import { gql } from '@apollo/client'

export const TOPICS = gql`
  {
    search(query: "topic:javascript", type: REPOSITORY, first: 5) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          nameWithOwner
          description
          updatedAt
          createdAt
          diskUsage
          forkCount
          stargazerCount
          url
          owner {
            id
            login
            avatarUrl
          }
          updatedAt
          primaryLanguage {
            name
            color
          }
          viewerHasStarred
        }
      }
    }
  }
`
