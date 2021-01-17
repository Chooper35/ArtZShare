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
export default class UpdateEmail extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "",
  };
  updateEmail = () => {
    var user = firebase.auth().currentUser;
    user
      .updateEmail(this.state.email)
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
          placeholder="Email"
          placeholderTextColor="#666666"
          autoCorrect={false}
          onChangeText={(email) => this.setState({ email: email })}
          value={this.state.email}
        />
        <Button title="Submit" onPress={() => this.updateEmail()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
