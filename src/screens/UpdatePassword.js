import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import { TextInput } from "react-native-paper";
import * as firebase from "firebase";
//import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

export default class UpdatePassword extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    password: "",
  };

  updatePassword = () => {
    var user = firebase.auth().currentUser;
    user
      .updatePassword(this.state.password)
      .then(function () {
        alert("Successfully updated!");
      })
      .catch(function (err) {
        alert(err);

        console.log(err);
      });
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#666666"
          autoCorrect={false}
          onChangeText={(password) => this.setState({ password: password })}
          value={this.state.password}
        />
        <Button title="Submit" onPress={() => this.updatePassword()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
