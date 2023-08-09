import { gql } from '@apollo/client'

export const ADD_STAR = gql`
  mutation ($starrableId: ID!) {
    removeStar(input: { addStar: $starrableId }) {
      clientMutationId
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`

export const REMOVE_STAR = gql`
  mutation ($starrableId: ID!) {
    removeStar(input: { starrableId: $starrableId }) {
      clientMutationId
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`
