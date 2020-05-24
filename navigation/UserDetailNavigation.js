import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserDetail from "../screens/UserDetail";

const Stack = createStackNavigator();
export default ({
  navigation,
  route: {
    params: { username }
  }
}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={username}
        initialParams={{ username }}
        navigation={navigation}
        component={UserDetail}
      />
    </Stack.Navigator>
  );
};
