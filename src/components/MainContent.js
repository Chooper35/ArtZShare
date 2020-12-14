import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyTabs from "../components/MyTabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PostScreen from "../screens/PostScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function MainContent() {
  
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MyTabs} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>  
   
      
  );
}

const styles = StyleSheet.create({});
