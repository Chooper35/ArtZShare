import React, { Component } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import PostFeed from "../components/PostFeed";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from "react-native-paper";

export default function ProfileScreen() {
  const [active, setActive] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.container}>
      
      <View style={styles.topContainer}>
        <View style={styles.picContainer}>
          <Image
            style={styles.profilePic}
            source={require("../../assets/image2.jpg")}
          ></Image>
          <Text>Ayberk Düzova</Text>
          <Text>@ayberkdzv</Text>

          <TouchableOpacity style={styles.followButton}>
            <SimpleLineIcons name="user-follow" size={25} color="black" />
            <Text>Follow</Text>
          </TouchableOpacity>
          <View style={styles.folContainer}>
            <View style={styles.littleFolContainer}>
              <AntDesign name="user" size={24} color="black" />
              <Text>Following</Text>
              <Text>80</Text>
            </View>
            <View style={styles.littleFolContainer}>
              <AntDesign name="user" size={24} color="black" />
              <Text>Followers</Text>
              <Text>100</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
            borderBottomColor: "black",
            width: 200,
            borderBottomWidth: 1,
          }}
        />
        <View>
          <Text style={styles.article}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi
            mi, commodo eget dolor sed, gravida porttitor tellus. Vestibulum
            molestie semper orci. Etiam ut pulvinar dolor, nec imperdiet tellus.
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
            borderBottomColor: "black",
            width: 200,
            borderBottomWidth: 1,
          }}
        />
      </View>
      <PostFeed></PostFeed>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E1FA",
  },
  followButton: {
    margin: 10,
    width: 200,
    padding: 10,
    backgroundColor: "rgba(64, 103, 255, 0.5)",
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "baseline",
    flexDirection: "row",
  },
  topContainer: {
    alignItems: "center",
  },
  folContainer: {
    flexDirection: "row",
    borderRadius: 10,
  },
  littleFolContainer: {
    margin: 5,
    borderRadius: 30,
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
  },
  picContainer: {
    marginHorizontal: 30,
    marginTop: 10,
    borderColor: "#fff",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  lineStyle: {
    alignItems: "center",
  },
  profilePic: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  article: {
    fontStyle: "italic",
    textAlign: "center",
  },
});
