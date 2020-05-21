import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { createStackNavigator } from "@react-navigation/stack";
import { stackStyles } from "../components/config";
import styles from "../styles";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const PhotoTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: styles.blackColor,
          marginBottom: 20
        },
        style: { ...stackStyles, paddingBottom: 20 },
        labelStyle: { color: styles.blackColor, fontWeight: "600" }
      }}
      tabBarPosition="bottom"
      backBehavior="order"
    >
      <Tab.Screen name="Select" component={SelectPhoto} />
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        title: "",
        headerStyle: { ...stackStyles }
      }}
    >
      <Stack.Screen name="PhotoTabs" component={PhotoTabs} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
    </Stack.Navigator>
  );
};
