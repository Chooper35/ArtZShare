import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'
import UploadScreen from '../screens/UploadScreen'
import PostScreen from '../screens/PostScreen'
import NotificationScreen from '../screens/NotificationScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons,AntDesign,EvilIcons} from '@expo/vector-icons'
import HomeScreen from "../screens/HomeScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={SearchScreen} labeled={false} activeColor="#383C5C" inactiveColor="#fff" barStyle={{ backgroundColor: '#AAA5B8' }} labelStyle={{ fontSize: 12 }}>
       <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{    
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{    
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="plussquareo" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
      
          tabBarIcon: ({ color }) => (
            <AntDesign name="bells" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
      
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
