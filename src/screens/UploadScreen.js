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

export default function UploadScreen() {
  const [image, setImage] = useState(null);
  const [title,setTitle] = useState("");
  const [Info,setInfo] = useState("");
  const [likes,setLike] = useState(0);
  const [comments,setComments] = useState(null);


  useEffect(() => {
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
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.log("image"+ image);
    }
  };

  const createPost = () =>{
    var userId=firebase.auth().currentUser.uid;
    console.log("ID" + userId);
    firebase.database().ref("posts").child(userId).set({
      userId:userId,
      title:title,
      likes:likes,    
      comments:comments, 
      Info:Info,
      postTime:firebase.database.ServerValue.TIMESTAMP,
    })
    
      
      
  }


  if (image == null) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={styles.ImageContainer}
            source={require("../../assets/plus.png")}
          ></Image>
        </TouchableOpacity>
        <TextInput style={styles.Input} placeholder="Başlık"></TextInput>
        <TextInput style={styles.Input} placeholder="Açıklama"></TextInput>
        <Button title="Paylaş"  onPress={()=> createPost()}></Button>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          <Image style={styles.ImageContainer} source={{ uri: image }}></Image>
        </TouchableOpacity>
        <TextInput style={styles.Input} placeholder="Başlık"></TextInput>
        <TextInput style={styles.Input} placeholder="Açıklama"></TextInput>
        <Button title="Paylaş"></Button>
      </View>
    );
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
