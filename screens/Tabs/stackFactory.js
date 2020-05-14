import React from "react";
import { YellowBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { stackStyles } from "../../components/config";

const StackFactory = createStackNavigator();

export default ({ route, navigation }) => {
  const { InitailRoute, customConfig } = route.params;
  console.log(customConfig);
  try {
    YellowBox.ignoreWarnings([
      "Non-serializable values were found in the navigation state"
    ]);

    return (
      <StackFactory.Navigator
        initialRouteName="Home"
        screenOptions={{ headerStyle: { ...stackStyles } }}
      >
        <StackFactory.Screen
          name={route.name}
          component={InitailRoute}
          options={customConfig}
        />
      </StackFactory.Navigator>
    );
  } catch (e) {
    console.log(e);
  }
};
