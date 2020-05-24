import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Tabs/Detail";

const Stack = createStackNavigator();
export default ({
  navigation,
  route: {
    params: { id }
  }
}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" "
        navigation={navigation}
        initialParams={{ id }}
        component={Detail}
      />
    </Stack.Navigator>
  );
};
