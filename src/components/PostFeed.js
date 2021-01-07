import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Image,ActivityIndicator } from "react-native";
import PostBanner from "./PostBanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import Post from "./PostBanner";

export default class PostFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataSource: [],
    length:0,
    isLoading:true,
  };
  componentDidMount() {
    var postListRef = firebase
      .database()
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        var length=snapshot.numChildren();
        console.log("Uzunluk"+ length);
        var data = snapshot.val();
        this.setState({
          dataSource: data,
          isLoading:false,
          length:length,
        });
        console.log(JSON.stringify(this.state.dataSource));
      });
  }

  render() {
    return (
      this.state.isLoading
      ?
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
      :
      
      <View style={styles.feedContainer}>
        <View>
          <FlatList
            data={Object.keys(this.state.dataSource)}
            renderItem={({ item }) => (
              <PostBanner
                userId={this.state.dataSource[item].userId}
                Info={this.state.dataSource[item].Info}
                title={this.state.dataSource[item].title}
                like={this.state.dataSource[item].likes}
                time={this.state.dataSource[item].postTime}
                image={this.state.dataSource[item].image}
              ></PostBanner>
            )}
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
