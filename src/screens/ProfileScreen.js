import React, { Component, useEffect, useLayoutEffect, useState } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import PostFeed from "../components/PostFeed";
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import * as firebase from "firebase";


export default function ProfileScreen() {
  var userId = firebase.auth().currentUser.uid;
  var [username, setUsername] = useState("");
  var [name, setName] = useState("");
  var [pInfo, setpInfo] = useState("");
  var [photoURL, setPhotoURL] = useState("");
  var [followers, setFollower] = useState(0);
  var [follows, setFollows] = useState(0);
  var [index,setIndex] = useState(0);

  useEffect(() => {
    firebase.auth().currentUser.reload(),
    firebase
      .database()
      .ref("/users/" + userId)
      .once("value")
      .then((snapshot) => {
        console.log("Snapshot ++ ", snapshot.val());
        username = (snapshot.val() && snapshot.val().userName) || "Anonymous";
        name = (snapshot.val() && snapshot.val().name) || "Anonymous";
        pInfo = (snapshot.val() && snapshot.val().pInfo) || "Açıklama";
        photoURL = (snapshot.val() && snapshot.val().photoURL) || "Anonymous";
        followers = (snapshot.val() && snapshot.val().follower) || 0;
        follows = (snapshot.val() && snapshot.val().follows) || 0;
        setUsername(username);
        setName(name);
        setpInfo(pInfo);
        setPhotoURL(photoURL);
        setFollower(followers);
        setFollows(follows);
      }).then(function(){
        firebase.auth().currentUser.reload()
        console.log("İndex"+index);
      }).catch(function(err){
        console.log(err);
      })
  }, [index]);


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.picContainer}>
          <TouchableOpacity>
            <Image
              style={styles.profilePic}
              source={{uri:photoURL}}
            ></Image>
          </TouchableOpacity>

          <Text>{name}</Text>
          <Text>&#64;{username}</Text>

          <TouchableOpacity style={styles.followButton}>
            <SimpleLineIcons name="user-follow" size={25} color="black" onPress={()=>setIndex(index + 1)}/>
            <Text>Yenile</Text>
          </TouchableOpacity>
          <View style={styles.folContainer}>
            <View style={styles.littleFolContainer}>
              <AntDesign name="user" size={24} color="black" />
              <Text>Following</Text>
              <Text>{follows}</Text>
            </View>
            <View style={styles.littleFolContainer}>
              <AntDesign name="user" size={24} color="black" />
              <Text>Followers</Text>
              <Text>{followers}</Text>
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
           {pInfo}
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
