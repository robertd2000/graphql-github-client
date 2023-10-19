import { gql } from "@apollo/client";

export const CREATE_ISSUE = gql`
  mutation ($repositoryId: ID!, $title: String!, $body: String!) {
    createIssue(
      input: { repositoryId: $repositoryId, title: $title, body: $body }
    ) {
      issue {
        id
      }
    }
  }
`;
