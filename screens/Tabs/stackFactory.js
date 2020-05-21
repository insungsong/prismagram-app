import React, { useState, useEffect } from "react";
import { YellowBox, Keyboard } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { stackStyles } from "../../components/config";
import { TextInput } from "react-native";
import constants from "../../constants";
import styles from "../../styles";
import SearchOnSubmit from "./SearchOnSubmit";
import Detail from "./Detail";

const StackFactory = createStackNavigator();
export default ({ route, navigation }) => {
  const { InitailRoute, customConfig } = route.params;
  try {
    YellowBox.ignoreWarnings([
      "Non-serializable values were found in the navigation state"
    ]);

    if (route.name === "Search") {
      const [value, setValue] = useState("");
      const [shouldFetch, setShouldFetch] = useState(false);

      const onSubmit = () => {
        setShouldFetch(true);
      };

      // 들어온 값을 바로 false로 바꿔주기위한 hook의 clear-up
      // useEffect(() => {
      //   return () => {
      //     setShouldFetch(false);
      //   };
      // }, [shouldFetch]);

      return (
        <>
          <StackFactory.Navigator
            initialRouteName="Search"
            keyboardHandlingEnabled={false}
            screenOptions={{
              headerTitle: () => (
                <TextInput
                  returnKeyType="search"
                  style={{
                    width: constants.width - 40,
                    height: 35,
                    backgroundColor: styles.lightGreyColor,
                    padding: 10,
                    borderRadius: 5,
                    textAlign: "center"
                  }}
                  value={value}
                  onChangeText={(e) => setValue(e)}
                  onEndEditing={onSubmit}
                  placeholder={"Search..."}
                  placeholderTextColor={styles.darkGreyColor}
                />
              )
            }}
          >
            <StackFactory.Screen
              name={route.name}
              component={InitailRoute}
              options={customConfig}
            />
          </StackFactory.Navigator>
          <SearchOnSubmit
            term={value}
            navigation={navigation}
            shouldFetch={shouldFetch}
          />
        </>
      );
    } else {
      return (
        <StackFactory.Navigator
          initialRouteName="Profile"
          screenOptions={{ headerStyle: { ...stackStyles } }}
        >
          <StackFactory.Screen
            name={route.name}
            component={InitailRoute}
            options={customConfig}
          />
        </StackFactory.Navigator>
      );
    }
  } catch (e) {
    console.log(e);
  }
};
