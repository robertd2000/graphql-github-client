import { gql } from '@apollo/client'

export const ISSUES_LIST = gql`
  # Type queries into this side of the screen, and you will
  # see intelligent typeaheads aware of the current GraphQL type schema,
  # live syntax, and validation errors highlighted within the text.

  # We'll get you started with a simple query showing your username!
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      issues(
        first: 20
        states: OPEN
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        pageInfo {
          endCursor
          startCursor
        }
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
          labels(first: 20) {
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
