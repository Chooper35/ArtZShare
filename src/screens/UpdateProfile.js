import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { TextInput } from "react-native-paper";
import * as firebase from "firebase";

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.profilePic}
            source={require("../../assets/profile.png")}
          ></Image>
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          autoCapitalize="none"
          placeholderTextColor="#808080"
    
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="#808080"
      
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Info"
          autoCapitalize="none"
          placeholderTextColor="#808080"
         
        ></TextInput>
        <Button
          title="Update"
          color="#841584"
         
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    width: 300,
    height: 50,
    margin: 5,
    borderRadius: 5,
  },
  profilePic: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
