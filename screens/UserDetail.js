import React from "react";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

import { ScrollView } from "react-native-gesture-handler";
import UserProfile from "../components/UserProfile";
import { USER_FRAGMENT } from "../fragments";
import Loader from "../components/Loader";
const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export default ({
  navigation,
  route: {
    params: { username }
  }
}) => {
  const { loading, data } = useQuery(GET_USER, { variables: { username } });

  return (
    <ScrollView>
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.seeUser && (
          <UserProfile navigation={navigation} {...data.seeUser} />
        )
      )}
    </ScrollView>
  );
};
