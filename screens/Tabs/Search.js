import React from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import SearchPresenter from "./SearchPresenter";

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default ({ navigation }) => {
  return <SearchPresenter navigation={navigation} />;
};
