import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import PostBanner from "./PostBanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import Post from "./PostBanner";

export default class ProfilePostFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataSource: [],
    isLoading: true,
  };
  componentDidMount() {
    var userId=firebase.auth().currentUser.uid,
    var postListRef = firebase
      .database()
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        var length = snapshot.numChildren();
        console.log("Uzunluk" + length);
        var data = snapshot.val();
        this.setState({
          dataSource: data,
          isLoading: false,
          length: length,
        });
      });
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
