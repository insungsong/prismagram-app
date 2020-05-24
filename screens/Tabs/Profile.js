import React, { useEffect } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../../fragments";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "react-apollo-hooks";
import UserProfile from "../../components/UserProfile";

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export const ME = gql`
  {
    me {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

export default ({ navigation }) => {
  const { loading, data } = useQuery(ME);
  return (
    <ScrollView>
      {loading ? (
        <Loader />
      ) : (
        data && data.me && <UserProfile navigation={navigation} {...data.me} />
      )}
    </ScrollView>
  );
};
