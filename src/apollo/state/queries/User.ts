import gql from 'graphql-tag';

export const GET_USER_INFO = gql`
  query {
    userInfo @client {
      name
      id
      profileImageUrl
      rank
    }
  }
`;
