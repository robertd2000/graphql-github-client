import { gql } from '@apollo/client'

export const REPO_OVERVIEW = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      descriptionHTML
      licenseInfo {
        id
        name
      }
      labels(first: 100) {
        nodes {
          color
          createdAt
          name
          description
        }
      }
      securityPolicyUrl
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

      homepageUrl
      watchers {
        totalCount
      }
      forkCount
      stargazerCount
      releases {
        totalCount
      }
      diskUsage
      discussions {
        totalCount
      }
      updatedAt

      repositoryTopics(first: 100) {
        nodes {
          ... on RepositoryTopic {
            __typename
            id
            url
            topic {
              name
              id
              stargazerCount
              viewerHasStarred
              repositories {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
