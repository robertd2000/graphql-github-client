import { gql } from '@apollo/client'

export const FOLLOW_ORG = gql`
  mutation ($organizationId: ID!) {
    followOrganization(input: { organizationId: $organizationId }) {
      organization {
        id
      }
    }
  }
`

export const UNFOLLOW_ORG = gql`
  mutation ($organizationId: ID!) {
    unfollowOrganization(input: { organizationId: $organizationId }) {
      organization {
        id
      }
    }
  }
`
