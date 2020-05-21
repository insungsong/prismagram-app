import React, { useState } from "react";
import styled from "styled-components";
import { ScrollView, RefreshControl } from "react-native";
import Loader from "../../components/Loader";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Post from "../../components/Post";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const [refreshing, setRefeshing] = useState(false);
  const { loading, data, refetch } = useQuery(FEED_QUERY);
  const refresh = async () => {
    try {
      setRefeshing(true);
      await refetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefeshing(false);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.seeFeed &&
        data.seeFeed.map((post) => (
          <Post navigation={navigation} key={post.id} {...post} />
        ))
      )}
    </ScrollView>
  );
};
