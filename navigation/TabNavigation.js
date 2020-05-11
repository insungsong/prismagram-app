import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Notification from "../screens/Tabs/Notification";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import stackFactory from "../screens/Tabs/stackFactory";
import MessagesLink from "../components/MessagesLink";

const TabNavigation = createBottomTabNavigator();
export default () => {
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen
        name="Home"
        component={stackFactory}
        initialParams={{
          InitailRoute: Home,
          customConfig: {
            hearderStyle: { height: 80 },
            headerRight: () => <MessagesLink />
          }
        }}
        options={{ title: "Home" }}
      />
      <TabNavigation.Screen
        name="Notification"
        component={stackFactory}
        initialParams={{
          InitailRoute: Notification,
          customConfig: { hearderStyle: { height: 80 } }
        }}
        options={{ title: "Notification" }}
      />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={({ navigation }) => navigation.navigate("PhotoNavigation")}
      />
      <TabNavigation.Screen
        name="Profile"
        component={stackFactory}
        initialParams={{
          InitailRoute: Profile,
          customConfig: { hearderStyle: { height: 80 } }
        }}
        options={{ title: "Profile" }}
      />
      <TabNavigation.Screen
        name="Search"
        component={stackFactory}
        initialParams={{
          InitailRoute: Search,
          customConfig: { hearderStyle: { height: 80 } }
        }}
        options={{ title: "Search" }}
      />
    </TabNavigation.Navigator>
  );
};
