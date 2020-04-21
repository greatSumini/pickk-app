import gql from 'graphql-tag';

export default {
  userInfo: (_, _args, {cache}) => {
    const {userInfo} = cache.readQuery({query: GET_USER_INFO});
    return userInfo;
  },
};

const GET_USER_INFO = gql`
  query {
    userInfo @client
  }
`;
