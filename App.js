import * as firebase from "firebase";
import config from "./firebase";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ActivityIndicator, Colors } from "react-native-paper";
import { navigationRef } from "./src/components/RootNavigation";
import { AuthContext } from "./src/components/context";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Component } from "react";
import AppStackScreens from "./src/stacks/AppStackScreens";
import AuthStackScreens from "./src/stacks/AuthStackScreens";
import MainContent from "./src/components/MainContent";
import LOGIN from "./src/screens/LOGIN";
import SIGNUP from "./src/screens/SIGNUP";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  } else {
    firebase.app(config);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Login" component={LOGIN}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SIGNUP}></Stack.Screen>
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPasswordScreen}
        ></Stack.Screen>
        <Stack.Screen name="Home" component={MainContent}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
