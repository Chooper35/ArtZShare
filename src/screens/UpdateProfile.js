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

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: "",
    userName: "",
    photoURL: "",
    pInfo: "",
    email: "",
    password: "",
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

  componentDidMount() {
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}`)
      .on("value", (snapshot) => {
        this.setState({
          name: (snapshot.val() && snapshot.val().name) || "Anonymous",
          userName: (snapshot.val() && snapshot.val().userName) || "Anonymous",
          pInfo: (snapshot.val() && snapshot.val().pInfo) || "Açıklama",
          photoURL: (snapshot.val() && snapshot.val().photoURL) || "Anonymous",
        });
      });
  }
  updateUser = () => {
    var user = firebase.auth().currentUser;
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
        alert("Başarıyla güncellendi.");
      })
      .catch(function (err) {
        alert("Oooopss!");
        console.log(err);
      });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
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
                <Image
                  source={{ uri: this.state.photoURL }}
                  style={{ width: 200, height: 200 }}
                />
              </View>
              <Button title="Pick an image" onPress={this.pickImage} />
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
        {/* <View style={styles.action}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(email) => this.setState({ email: email })}
            value={this.state.email}
          />
        </View>
        <View style={styles.action}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(password) => this.setState({ password: password })}
            value={this.state.password}
          />
        </View> */}
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin:20,
    flex: 1,
  },
  commandButton: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "gray",
    alignItems: "center",
    margin: 10,
  },
  panelButtonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
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
