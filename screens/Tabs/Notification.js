import React from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default () => {
  return (
    <View>
      <Loader />
    </View>
  );
};
