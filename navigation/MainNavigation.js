import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
import { stackStyles } from "../components/config";
import DetailNavigation from "./DetailNavigation";
import UserDetailNavigation from "./UserDetailNavigation";

const MainNavigation = createStackNavigator();

export default () => (
  <NavigationContainer>
    <MainNavigation.Navigator
      name="Home"
      headerMode="none"
      mode="modal"
      screenOptions={{ headerStyle: { backgroundColor: "#FAFAFA" } }}
    >
      <MainNavigation.Screen name="TabNavigation" component={TabNavigation} />
      <MainNavigation.Screen
        name="PhotoNavigation"
        component={PhotoNavigation}
      />
      <MainNavigation.Screen
        name="DetailNavigation"
        component={DetailNavigation}
      />
      <MainNavigation.Screen
        name="UserDetailNavigation"
        component={UserDetailNavigation}
      />
      <MainNavigation.Screen
        name="MessageNavigation"
        component={MessageNavigation}
      />
    </MainNavigation.Navigator>
  </NavigationContainer>
);
