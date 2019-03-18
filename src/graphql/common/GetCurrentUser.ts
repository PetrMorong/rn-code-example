import gql from "graphql-tag";

export const GetCurrentUser = gql`
  query GetCurrentUserInfo {
    me {
      uid
      zip
      city
      photoURL
      displayName
      latitude
      longitude
      type
      streetAddress
    }
  }
`;
