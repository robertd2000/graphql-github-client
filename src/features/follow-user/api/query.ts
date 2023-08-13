import { gql } from '@apollo/client'

export const FOLLOW_USER = gql`
  mutation ($userId: ID!) {
    followUser(input: { userId: $userId }) {
      user {
        id
      }
    }
  }
`
