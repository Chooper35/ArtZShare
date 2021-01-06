import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import PostBanner from "./PostBanner";
import * as firebase from "firebase";

export default class PostFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataSource: [],
  };

  _renderPost() {
    return <PostBanner data={this.state.dataSource}></PostBanner>;
  }
  _returnKey(item) {
    return item.toString();
  }

  componentDidMount() {
    var postListRef=firebase.database().ref("posts").once("value").then((snapshot)=>{
      console.log("Post Snapshot == "+ JSON.stringify(snapshot));
      this.setState({
        dataSource:JSON.stringify(snapshot),
      })

      console.log("DataSource ==="+JSON.stringify(this.state.dataSource));


    })
  }

  render() {
    return (
      <View style={styles.feedContainer}>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
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
    flex: 1,
  },
});
