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
    name
    repositories {
      totalCount
    }
    followers {
      totalCount
    }
    location
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

const ISSUE_FIELDS = gql`
  fragment IssueFields on Issue {
    id
    title
    closedAt
    createdAt
    closed

    labels(first: 10) {
      nodes {
        name
        id
      }
    }
    repository {
      name
      owner {
        login
      }
    }
    comments {
      totalCount
    }
    author {
      login
      url
      avatarUrl
      resourcePath
    }
    number
  }
`

const DISCUSSION_FIELDS = gql`
  fragment DiscussionFields on Discussion {
    id
    title
    createdAt
    repository {
      name
      owner {
        login
      }
    }
    author {
      login
      url
      avatarUrl
      resourcePath
    }
    body
    comments {
      totalCount
    }
  }
`

export const SEARCH_QUERY = gql`
  ${REPO_FIELDS}
  ${USER_FIELDS}
  ${ORG_FIELDS}
  ${ISSUE_FIELDS}
  ${DISCUSSION_FIELDS}
  query Search(
    $query: String!
    $type: SearchType!
    $first: Int!
    $after: String
  ) {
    search(query: $query, type: $type, first: $first, after: $after) {
      userCount
      repositoryCount
      issueCount
      discussionCount
      nodes {
        ...RepoFields
        ...UserFields
        ...OrgFields
        ...IssueFields
        ...DiscussionFields
      }
    }
  }
`
