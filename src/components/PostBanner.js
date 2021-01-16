import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as RootNavigation from "../components/RootNavigation";
import * as firebase from "firebase";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    profileURL: "",
    userName: "",
    length:0,
  };

  componentDidMount(){
    var userId = this.props.userId;
    const onValueChange = firebase
      .database()
      .ref(`/users/${userId}`)
      .on("value", (snapshot) => {    
        username = (snapshot.val() && snapshot.val().userName) || "Anonymous"; 
        photoURL = (snapshot.val() && snapshot.val().photoURL) || "Anonymous";
        this.setState({
          profileURL:photoURL,
          userName:username

        })
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> {
          RootNavigation.navigate("PostScreen",{
            profileURL:this.state.profileURL,
            userName:this.state.userName,
            userId: this.props.userId,
            Info:this.props.Info,
            title:this.props.title,
            like:this.props.like,
            time:this.props.time,
            image:this.props.image,
            postId:this.props.postId,
          }
          
          )
        }} >
          <View style={styles.imageContainer}>
            <Image
              style={styles.photo}
              source={this.props.image ? {uri: this.props.image} : null}
            />
          </View>
          <View
            style={{
              margin: 5,
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />

          <View style={styles.userContainer}>
            <Image
              source={this.state.profileURL ? {uri: this.state.profileURL } : null}
              style={styles.profilePic}
            ></Image>

            <Text style={styles.userName}>{this.state.userName}</Text>
            <View style={styles.likeContainer}>
              <Text style={styles.likeCount}>{this.props.like}</Text>
              <AntDesign name="heart" size={15} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(64, 101, 32, 0.1)",
    borderRadius: 10,
    padding: 5,
    flex: 1,
    margin: 5,
    flexDirection: "column",
  },
  imageContainer: {
    alignItems: "center",
  },
  likeContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "baseline",
    justifyContent: "space-evenly",
  },
  photo: {
    margin: 5,
    borderRadius: 10,
    width: 180,
    height: 180,
  },
  userContainer: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  likeCount: {
    fontSize: 13,
  },
  userName: {
    marginLeft: 5,
  },
  profilePic: {
    borderRadius: 50,
    width: 30,
    height: 30,
  },
});
