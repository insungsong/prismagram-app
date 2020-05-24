import React, { useState } from "react";
import styled from "styled-components";
import { Image, Alert, ActivityIndicator } from "react-native";
import styles from "../../styles";
import { gql } from "apollo-boost";
import constants from "../../constants";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useMutation } from "react-apollo-hooks";
import { FEED_QUERY } from "../Tabs/Home";

const UPLOAD = gql`
  mutation upload($caption: String!, $files: [String!]!, $location: String) {
    upload(caption: $caption, files: $files, location: $location) {
      id
      caption
      location
    }
  }
`;

const View = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Container = styled.View`
  padding: 20px;
  flex-direction: row;
`;

const Form = styled.View`
  justify-content: flex-start;
`;

const STextInput = styled.TextInput`
  margin-bottom: 10px;
  border: 0px solid ${styles.lightGreyColor};
  border-bottom-width: 1px;
  padding-bottom: 10px;
  width: ${constants.width - 180};
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: white;
  font-weight: 600;
`;

export default ({ route, navigation }) => {
  const [loading, setIsLoading] = useState(false);
  const captionInput = useInput("");
  const locationInput = useInput("");
  const [uploadMutation] = useMutation(UPLOAD, {
    variables: {
      caption: captionInput.value,
      location: locationInput.value
    },
    refetchQueries: () => [{ query: FEED_QUERY }]
  });
  const photo = route;

  const handleSubmit = async () => {
    if (captionInput.value === "" || locationInput.value === "") {
      Alert.alert("All fields are required");
    }
    const formData = new FormData();
    const name = photo.params.photo.filename;
    const uri = photo.params.photo.uri;
    const [, type] = name.split(".");

    formData.append("file", {
      name,
      type: type.toLowerCase(),
      uri
    });

    try {
      setIsLoading(true);
      const {
        data: { location }
      } = await axios.post("http://localhost:4000/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });

      const {
        data: { upload }
      } = await uploadMutation({
        variables: {
          files: [location]
        }
      });

      if (upload.id) {
        navigation.navigate("TabNavigation");
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Can't upload", "Try later");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View>
      <Container>
        <Image
          source={{ uri: route.params.photo.uri }}
          style={{ height: 80, width: 80, marginRight: 30 }}
        />
        <Form>
          <STextInput
            onChangeText={captionInput.onChange}
            value={captionInput.value}
            placeholder="Caption"
            multiline={true}
            placeholderTextColor={styles.darkGreyColor}
          />
          <STextInput
            onChangeText={locationInput.onChange}
            value={locationInput.value}
            placeholder="Location"
            multiline={true}
            placeholderTextColor={styles.darkGreyColor}
          />
          <Button onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text>Upload </Text>
            )}
          </Button>
        </Form>
      </Container>
    </View>
  );
};
