import React, { Component, useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Platform } from "react-native";
import * as firebase from "firebase";

export default class UploadScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    image: null,
    title: "",
    Info: "",
  };
  componentDidMount() {
    async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry dude its now allowed!");
        }
      }
    };
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      this.setState({
        image: result.uri,
      });
      console.log("image" + this.state.image);
    }
  };
  createPost = () => {
    var userId = firebase.auth().currentUser.uid;
    var newPostKey = firebase.database().ref().child("posts").push().key;
    console.log("ID" + userId);
    firebase
      .database()
      .ref("posts")
      .child(newPostKey)
      .set({
        userId: userId,
        title: this.state.title,

        image: this.state.image,

        Info: this.state.Info,
        postTime: firebase.database.ServerValue.TIMESTAMP,
      })
      .then(function () {
        alert("Post başarıyla paylaşıldı.");
      });
  };
  render() {
    if (this.state.image == null) {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.pickImage}>
            <Image
              style={styles.ImageContainer}
              source={require("../../assets/plus.png")}
            ></Image>
          </TouchableOpacity>
          <TextInput
            style={styles.Input}
            placeholder="Başlık"
            onChangeText={(title) => this.setState({ title: title })}
            value={this.state.name}
          ></TextInput>
          <TextInput
            style={styles.Input}
            placeholder="Açıklama"
            onChangeText={(Info) => this.setState({ Info: Info })}
            value={this.state.name}
          ></TextInput>
          <Button title="Paylaş" onPress={() => this.createPost()}></Button>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.pickImage}>
            <Image
              style={styles.ImageContainer}
              source={{ uri: this.state.image }}
            ></Image>
          </TouchableOpacity>
          <TextInput
            style={styles.Input}
            placeholder="Başlık"
            onChangeText={(title) => this.setState({ title: title })}
            value={this.state.name}
          ></TextInput>
          <TextInput
            style={styles.Input}
            placeholder="Açıklama"
            onChangeText={(Info) => this.setState({ Info: Info })}
            value={this.state.name}
          ></TextInput>
          <Button title="Paylaş" onPress={() => this.createPost()}></Button>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    justifyContent: "center",
  },
  ImageContainer: {
    alignSelf: "center",
    margin: 10,
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  Input: {
    margin: 10,
  },
});
