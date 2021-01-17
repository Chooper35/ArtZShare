import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import PostBanner from "../PostBanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";

export default class PostFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataSource: [],
    isLoading: true,
  };
  componentDidMount() {
    firebase
      .database()
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        var length = snapshot.numChildren();
        console.log("Uzunluk" + length);
        var data = snapshot.val();
        console.log("Brağağağa" + JSON.stringify(data));
        this.setState({
          dataSource: data,
          isLoading: false,
          length: length,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    firebase
      .database()
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        var data = snapshot.val();
        this.setState({
          dataSource: data,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.dataSource == null) {
      return (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            There is nothing :(
          </Text>
        </View>
      );
    } else {
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
                <PostBanner
                  userId={this.state.dataSource[item].userId}
                  postId={item}
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
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
  },
});
