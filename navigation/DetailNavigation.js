import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Tabs/Detail";

const Stack = createStackNavigator();
export default ({
  route: {
    params: { id }
  }
}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " initialParams={{ id }} component={Detail} />
    </Stack.Navigator>
  );
};
