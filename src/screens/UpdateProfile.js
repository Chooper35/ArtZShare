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

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: "",
    userName: "",
    photoURL: "",
    pInfo: "",
  };
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
        photoURL: result.uri,
      });
    }
  };
  updateUser = () => {
    var userId = firebase.auth().currentUser.uid;
    console.log("ilk log" + JSON.stringify(userId));
    firebase
      .database()
      .ref("users")
      .child(userId)
      .update({
        name: this.state.name,
        userName: this.state.userName,
        photoURL: this.state.photoURL,
        pInfo: this.state.pInfo,
      })
      .then(function () {
        firebase.auth().currentUser.reload();
        alert("Başarıyla güncellendi.");
      })
      .catch(function (err) {
        alert("Oooopss!");
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              height: 200,
              width: 200,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  title="Pick an image from camera roll"
                  onPress={this.pickImage}
                />
                <Image
                  source={{ uri: this.state.photoURL }}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.action}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(name) => this.setState({ name: name })}
            value={this.state.name}
          />
        </View>
        <View style={styles.action}>
          <TextInput
            placeholder="User Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(userName) => this.setState({ userName: userName })}
            value={this.state.userName}
          />
        </View>
        <View style={styles.action}>
          <TextInput
            placeholder="Bio"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(pInfo) => this.setState({ pInfo: pInfo })}
            value={this.state.pInfo}
          />
        </View>
        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => this.updateUser()}
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "blue",
    alignItems: "center",
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
});
