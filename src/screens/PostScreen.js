import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CommentFeed from "../components/CommentFeed";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Image
            source={require("../../assets/image2.jpg")}
            style={styles.profilePic}
          ></Image>

          <Text style={styles.userName}>@ayberkdzv</Text>
          <View style={styles.likeContainer}>
            <Text style={styles.likeCount}>55</Text>
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
          <Image
            style={styles.photo}
            source={require("../../assets/max.jpg")}
          />
        </View>
     

        
        <View
          style={{
            margin: 5,
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <View>
          <CommentFeed></CommentFeed>
        </View>
      </View>
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
    alignContent:"center",
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
