import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";

const Containter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SquarePhoto = ({ navigation, files = [], id }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailNavigation", { id })}
    >
      <Containter>
        <Image
          source={{ uri: files[0].url }}
          style={{
            width: constants.width / 1.1,
            height: constants.height / 2.8
          }}
        />
      </Containter>
    </TouchableOpacity>
  );
};

SquarePhoto.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  id: PropTypes.string.isRequired
};

export default SquarePhoto;
