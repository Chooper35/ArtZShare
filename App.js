import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef} from './src/components/RootNavigation';
import React from "react";
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

const Drawer=createDrawerNavigator();
const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef} >
        <AppStackScreens navigation={this.props.navigation}></AppStackScreens>
      
      </NavigationContainer>

    );
  }
}
export default App;
