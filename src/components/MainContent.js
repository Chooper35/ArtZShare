import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyTabs from "../components/MyTabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import PostScreen from "../screens/PostScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DrawerContent from "../screens/DrawerContent";
import UpdateProfile from "../screens/UpdateProfile";
import AnotherUserProfile from "../screens/AnotherUserProfile";



const Drawer = createDrawerNavigator();

export default function MainContent({ navigation }, props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={MyTabs} {...props} />
      <Drawer.Screen name="Settings" component={SettingsScreen} {...props} />
      <Drawer.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        {...props}
      />
      <Drawer.Screen name="PostScreen" component={PostScreen} {...props} />
      <Drawer.Screen name="Another" component={AnotherUserProfile} {...props}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
