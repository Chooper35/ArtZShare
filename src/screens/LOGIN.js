import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, Button } from "react-native-paper";
import SignUp from "./SIGNUP";
import { AuthContext } from "../components/context";
import firebase from "firebase";

export default class LOGIN extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "",
    password: "",
    loading: false,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.props.navigation.navigate("Main");
      } else {
        this.setState({ loading: false });
      }
    });
  };

  loginApp = () => {
    this.setState({ loading: false });
    console.log(this.props);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert("Giriş Başarılı");

        this.props.navigation.navigate("Main");
      })
      .catch((err) => {
        this.setState({ loading: false });
        Alert.alert("Oops", "Giriş Yapılamadı. Lütfen tekrar deneyiniz.", [
          { text: "Tamam" },
        ]);
      });
  };
  goSignUp = () => {
    const pushAction = StackActions.push("SignUp");

    this.props.navigation.dispatch(pushAction);
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="small" color="black" />
        </View>
      );
    } else {
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
                placeholder="Email"
                onChangeText={(email) => this.setState({ email: email })}
                value={this.state.email}
                keyboardType="email-address"
              ></TextInput>
              <TextInput
                style={styles.inputStyle}
                secureTextEntry={true}
                placeholder="Password"
                value={this.state.password}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
              ></TextInput>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => this.loginApp()}
              >
                <Text style={styles.buttonTextStyle}>Log In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => this.goSignUp()}
              >
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ForgotPass")}
              >
                <Text>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      );
    }
  }
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
