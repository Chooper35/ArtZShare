import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import PostScreen from "../screens/PostScreen";
import FollowerPost from "./FollowerPost";
import Post from "./PostBanner";
import * as firebase from "firebase";

export default class FollowerPostFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataSource: [],
    length: 0,
    isLoading: true,
  };
  componentDidMount() {
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
    return this.state.isLoading ? (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="black" />
      </View>
    ) : (
      <View style={styles.feedContainer}>
        <View>
          <FlatList
            data={Object.keys(this.state.dataSource)}
            renderItem={({ item }) => (
              <FollowerPost
                userId={this.state.dataSource[item].userId}
                Info={this.state.dataSource[item].Info}
                title={this.state.dataSource[item].title}
                like={this.state.dataSource[item].likes}
                time={this.state.dataSource[item].postTime}
                image={this.state.dataSource[item].image}
              ></FollowerPost>
            )}
            numColumns={1}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {},
});
