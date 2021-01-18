import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CommentFeed from "../components/Feeds/CommentFeed";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import * as firebase from "firebase";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
export default class PostScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLiked: false,
    like: this.props.route.params.like,
  };

  getLike = () => {
    var postId = this.props.route.params.postId;
    var likeCountRef = firebase.database().ref("posts/" + postId);
    likeCountRef.once("value").then((snapshot) => {
      console.log("Sinep" + snapshot.val().like);
      this.setState({
        like: snapshot.val().like,
      });
    });
  };

  componentDidMount() {
    this.getLike();
  }

  likePhoto = () => {
    var postId = this.props.route.params.postId;
    console.log(this.state.like);
    var likeCountRef = firebase.database().ref("posts/" + postId);
    likeCountRef.update({
      like: this.state.like + 1,
    });
    alert("You liked that photo" + this.props.route.params.postId);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.like !== this.state.like) {
      this.getLike();
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.userContainer}>
          <Image
            source={{ uri: this.props.route.params.profileURL }}
            style={styles.profilePic}
          ></Image>
          <View>
            <Text style={styles.userName}>
              {this.props.route.params.userName}
            </Text>
            <Text style={styles.userName}>
              {moment(this.props.route.params.time).fromNow()}
            </Text>
          </View>

          <View style={styles.likeContainer}>
            <Text style={styles.likeCount}>{this.props.route.params.like}</Text>
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
            source={{ uri: this.props.route.params.image }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.likePhoto()}>
            <AntDesign
              name="heart"
              size={25}
              color="black"
              style={styles.button}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              name="comments"
              size={25}
              color="black"
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 5,
            borderBottomColor: "gray",
            borderBottomWidth: 0.5,
          }}
        />
        <View style={styles.InfoContainer}>
          <Text style={styles.title}>{this.props.route.params.title}</Text>
          <Text>{this.props.route.params.Info}</Text>
        </View>

        <View
          style={{
            margin: 5,
            borderBottomColor: "gray",
            borderBottomWidth: 0.5,
          }}
        />
        <View>
          <CommentFeed></CommentFeed>
        </View>
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
  buttonContainer: {
    alignContent: "space-around",
    flexDirection: "row",
  },
  button: {
    marginRight: 15,
  },
  title: {
    alignItems: "center",
    fontSize: 20,
  },
  InfoContainer: {
    alignItems: "center",
  },
});
