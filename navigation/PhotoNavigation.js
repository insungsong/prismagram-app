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

const PhotoTabs = ({ navigation }) => {
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
      <Tab.Screen
        name="Select"
        navigation={navigation}
        component={SelectPhoto}
      />
      <Tab.Screen name="Take" navigation={navigation} component={TakePhoto} />
    </Tab.Navigator>
  );
};

export default ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Upload",
        headerStyle: { ...stackStyles },
        headerBackTitle: null
      }}
    >
      <Stack.Screen name="PhotoTabs" component={PhotoTabs} />
      <Stack.Screen
        name="UploadPhoto"
        navigation={navigation}
        component={UploadPhoto}
      />
    </Stack.Navigator>
  );
};
