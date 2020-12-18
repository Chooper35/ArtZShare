import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, Button } from "react-native-paper";
import SignUp from "./SIGNUP";
import { AuthContext } from "../components/context";

export default function LOGIN({ navigation }) {
  const [data, setData] = React.useState({
    userName: "User",
    password: "Pass",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    signIn(userName, password);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ImageBackground
        source={require("../../assets/flowers.jpg")}
        style={styles.image}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>ArtZShare</Text>
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Username"
            onChangeText={(val)=>handleValidUser(val)}
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          ></TextInput>
          <TextInput
            style={styles.inputStyle}
            secureTextEntry={true}
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          ></TextInput>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              loginHandle(data.userName,data.password )
            }}
          >
            <Text style={styles.buttonTextStyle}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> navigation.navigate("SignUp")}
          >
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ForgotPasswordScreen")
            }
          >
            <Text>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  titleContainer: {
    margin: 30,
    borderRadius: 20,
    marginTop: 1,
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.9,
  },
  titleStyle: {
    fontSize: 65,
    fontStyle: "italic",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    textShadowRadius: 8.3,
    elevation: 13,
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
  },
  inputStyle: {
    width: 300,
    margin: 5,
    height: 50,
  },
  buttonStyle: {
    marginVertical: 20,
    width: 250,
    padding: 5,
    borderWidth: 0.1,
    borderRadius: 50,
    borderColor: "black",
    backgroundColor: "#E7E1FA",
  },
  buttonTextStyle: {
    textAlign: "center",
    fontSize: 25,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
  },
  Loading: {
    color: "#ffffff",
  },
});
