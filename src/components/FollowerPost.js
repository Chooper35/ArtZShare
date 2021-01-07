import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CommentFeed from "../components/CommentFeed";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import * as firebase from "firebase";
import moment from "moment";

export default class FollowerPost extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.userContainer}>
          <Image
            source={{ uri: this.props.profileURL }}
            style={styles.profilePic}
          ></Image>

          <Text style={styles.userName}>{this.props.userName}</Text>
          <Text style={styles.userName}>
            {moment(this.props.time).fromNow()}
          </Text>
          <View style={styles.likeContainer}>
            <Text style={styles.likeCount}>{this.props.like}</Text>
            <AntDesign name="heart" size={20} color="black" />
          </View>
          <View
            style={{
              margin: 5,
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.photo} source={{ uri: this.props.image }} />
        </View>
        <View>
          <Text>{this.props.title}</Text>
          <View
            style={{
              margin: 5,
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
          <Text>{this.props.Info}</Text>
        </View>

        <View
          style={{
            margin: 5,
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(64, 101, 32, 0.1)",
    padding: 5,
    margin: 5,
    flexDirection: "column",
  },
  imageContainer: {
    alignItems: "center",
  },
  likeContainer: {
    marginHorizontal: 120,
    flexDirection: "row-reverse",
    paddingHorizontal: 20,
    alignItems: "baseline",
  },
  photo: {
    alignContent: "center",
    margin: 5,
    width: 400,
    height: 400,
  },
  userContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  likeCount: {
    marginHorizontal: 3,
    fontSize: 15,
  },
  userName: {
    marginLeft: 5,
  },
  profilePic: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});
