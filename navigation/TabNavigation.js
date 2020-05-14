import React from "react";
import { View, Text, Image } from "react-native";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Notification from "../screens/Tabs/Notification";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import stackFactory from "../screens/Tabs/stackFactory";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";

const TabNavigation = createBottomTabNavigator();
export default () => {
  return (
    <TabNavigation.Navigator
      tabBarOptions={{
        showLabel: false,
        Style: { backgroundColor: "#FAFAFA" }
      }}
      screenOptions={{ hearderStyle: { backgroundColor: "#FAFAFA" } }}
    >
      <TabNavigation.Screen
        name="Home"
        component={stackFactory}
        initialParams={{
          InitailRoute: Home,
          customConfig: {
            hearderStyle: { height: 80 },
            headerRight: () => <MessagesLink />,
            headerTitle: <NavIcon name="logo-instagram" size={35} />
          }
        }}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
          )
        }}
      />
      <TabNavigation.Screen
        name="Search"
        component={stackFactory}
        initialParams={{
          InitailRoute: Search,
          customConfig: { hearderStyle: { height: 80 } }
        }}
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          )
        }}
      />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={({ navigation }) => navigation.navigate("PhotoNavigation")}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              size={30}
              name={Platform.OS === "ios" ? "ios-add" : "md-add"}
            />
          )
        }}
      />
      <TabNavigation.Screen
        name="Notification"
        component={stackFactory}
        initialParams={{
          InitailRoute: Notification,
          customConfig: { hearderStyle: { height: 80 } }
        }}
        options={{
          title: "Notification",
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={
                Platform.OS === "ios"
                  ? focused
                    ? "ios-heart"
                    : "ios-heart-empty"
                  : focused
                  ? "md-heart"
                  : "md-heart-empty"
              }
            />
          )
        }}
      />
      <TabNavigation.Screen
        name="Profile"
        component={stackFactory}
        initialParams={{
          InitailRoute: Profile,
          customConfig: { hearderStyle: { height: 80 } }
        }}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            />
          )
        }}
      />
    </TabNavigation.Navigator>
  );
};
