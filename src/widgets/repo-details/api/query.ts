import { gql } from '@apollo/client'

export const REPO_DETAILS = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      isPrivate
      viewerHasStarred
      owner {
        login
        avatarUrl
        __typename
      }
      description
      languages(first: 6, orderBy: { field: SIZE, direction: DESC }) {
        nodes {
          id
          name
          color
        }
        totalCount
      }
      issues {
        totalCount
      }
      homepageUrl
      watchers {
        totalCount
      }
      forkCount
      stargazerCount
    }
  }
`
