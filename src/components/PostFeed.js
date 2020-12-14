import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import PostBanner from "./PostBanner";

const DATA = [
  {
    Imageid: "bs7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    ppImageid: "1",
    userName: "First Item",
    likeCount: "5",
  },
  {
    Imageid: "ba7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    ppImageid: "2",
    userName: "Second Item",
    likeCount: "5",
  },
  {
    Imageid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    ppImageid: "3",
    userName: "Third Item",
    likeCount: "5",
  },
];

export default class PostFeed extends Component {
  _renderPost() {
    return <PostBanner></PostBanner>;
  }
  _returnKey(item) {
    return item.toString();
  }

  render() {
    return (
      <View style={styles.feedContainer}>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5,6,7,8,9,10,11,12]}
            keyExtractor={this._returnKey}
            renderItem={() => this._renderPost()}
            numColumns={2}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    flex:1,
  },
});
