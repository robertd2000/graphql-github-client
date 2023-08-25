import { gql } from '@apollo/client'

export const REPO_OVERVIEW_ISSUES = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      issues(
        first: 5
        states: OPEN
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          title
          number
          closed
          milestone {
            id
            title
          }
          author {
            login
          }
          state
          createdAt
          labels(first: 10) {
            nodes {
              name
              color
              url
            }
          }
          comments {
            totalCount
          }
        }
      }
    }
  }
`
