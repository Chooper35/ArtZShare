import React, { Component, useState } from "react";
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
import firebase from "firebase";
import config from "../../firebase"

export default class SIGNUP extends Component {
  state = {
    name: "",
    userName: "",
    email: "",
    password: "",
    login: false,
  };

  signUpApp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((auth) => {
        let uid = auth.user.uid;
        this.createUser(uid);
      })
      .catch((err) => {
        Alert.alert("Hoppala hemşerim", "Kayıt olamadın tekrar dene koç", [
          { text: "Tamam abi" },
          console.log(err),
        ]);
      });
  };
  createUser = (uid) => {
    firebase.database().ref("users").child(uid).set({
      email: this.state.email,
      uid: uid,
      name: this.state.name,
      userName: this.state.userName,
      password: this.state.password,
    });
  };

  render() {
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
              onChangeText={(name) => this.setState({ name: name })}
              value={this.state.name}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="#808080"
              onChangeText={(userName) => this.setState({ userName: userName })}
              value={this.state.userName}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="#808080"
              onChangeText={(email) => this.setState({ email: email })}
              value={this.state.email}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="#808080"
              onChangeText={(password) => this.setState({ password: password })}
              value={this.state.password}
            />
            {/* <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="#808080"
            /> */}
            <TouchableOpacity style={styles.button} onPress={() => this.signUpApp()}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
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
    opacity: 0.9,
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
    height: 50,
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
