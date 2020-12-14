import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Input,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput } from "react-native-paper";
export default function SignUp(navigation) {
  const [text, setText] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ImageBackground
        source={require("../../assets/flowers.jpg")}
        style={styles.image}
      >
        <View style={styles.altContainer}>
          <Text style={styles.appTitle}>ArtZShare</Text>
          <Text style={styles.textBody}>Create an account first!</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            autoCapitalize="none"
            placeholderTextColor="#808080"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="#808080"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="#808080"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="#808080"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="#808080"
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Done")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
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
  altContainer: {
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity:0.9,
  },
  appTitle: {
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

  textInput: {
    width: 300,
    height:50,
    margin: 5,
    borderRadius: 5,
  },

  textBody: {
    margin: 20,
    fontSize: 20,
    fontStyle: "italic",
  },

  button: {
    marginVertical: 20,
    width: 250,
    padding: 5,
    borderWidth: 0.1,
    borderRadius: 50,
    borderColor: "black",
    backgroundColor: "#E7E1FA",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 25,
  },

  bottomText: {
    marginTop: 5,
    fontSize: 15,
  },
});
