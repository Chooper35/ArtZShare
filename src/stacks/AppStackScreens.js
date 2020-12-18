import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainContent from "../components/MainContent";
import PostScreen from "../screens/PostScreen";
import AuthStackScreens from "./AuthStackScreens";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import * as RootNavigation from "../components/RootNavigation";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
export default AppStackScreens = ({ navigation }) => {
  const AppStack = createStackNavigator();
  const [active, setActive] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  return (
    <AppStack.Navigator headerMode="screen">
      <AppStack.Screen
        name="Main"
        component={MainContent}
        options={({ navigation}) => ({
          headerRight: () => (
            <Provider>
              <View
                style={{
                  marginTop: 15,
                  marginRight: 30,
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity onPress={() => alert("Barış BRA")}>
                  <Entypo name="menu" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </Provider>
          ),

          title: "ArtZShare",
        })}
      ></AppStack.Screen>
      <AppStack.Screen
        name="PostScreen"
        component={PostScreen}
      ></AppStack.Screen>
    </AppStack.Navigator>
  );
};
