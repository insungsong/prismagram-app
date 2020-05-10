import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const TabNavigation = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator>
        <TabNavigation.Screen
          name="Home"
          options={{ title: "Feed" }}
          component={Home}
        />
        <TabNavigation.Screen name="Notification" component={Notification} />
        <TabNavigation.Screen
          name="Add"
          component={View}
          listeners={() => console.log("Add")}
        />
        <TabNavigation.Screen name="Profile" component={Profile} />
        <TabNavigation.Screen name="Search" component={Search} />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
};
