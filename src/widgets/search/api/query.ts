import { gql } from '@apollo/client'

export const REPO_FIELDS = gql`
  fragment RepoFields on Repository {
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
`
export const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    login
    bio
    avatarUrl
    viewerIsFollowing
  }
`
export const ORG_FIELDS = gql`
  fragment OrgFields on Organization {
    id
    login
    avatarUrl
    description
    url
  }
`

export const SEARCH_QUERY = gql`
  ${REPO_FIELDS}
  ${USER_FIELDS}
  ${ORG_FIELDS}
  query Search(
    $query: String!
    $type: SearchType!
    $first: Int!
    $after: String
  ) {
    search(query: $query, type: $type, first: $first, after: $after) {
      userCount
      repositoryCount
      nodes {
        ...RepoFields
        ...UserFields
        ...OrgFields
      }
    }
  }
`
