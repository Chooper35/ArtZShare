import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SIGNUP";
import LOGIN from "../screens/LOGIN";
import ForgotScreen from "../screens/ForgotPasswordScreen";

export default AuthStackScreens = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator headerMode="float" mode="modal">
      <AuthStack.Screen
        name="LoginScreen"
        component={LOGIN}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTransparent: "true",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTransparent: "true",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTransparent: "true",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      ></AuthStack.Screen>

    
    
    </AuthStack.Navigator>
  );
};
