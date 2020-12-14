import React, { Component } from "react";
import { Text, StyleSheet, View,FlatList } from "react-native";
import PostScreen from "../screens/PostScreen";
import FollowerPost from "./FollowerPost";
import Post from "./PostBanner";

export default class FollowerPostFeed extends Component {
  _renderPost() {
    return <Post></Post>;
  }
  _returnKey(item) {
    return item.toString();
  }

  render() {
    return (
      <View style={styles.feedContainer}>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            keyExtractor={this._returnKey}
            renderItem={() => this._renderPost()}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    
  },
});
