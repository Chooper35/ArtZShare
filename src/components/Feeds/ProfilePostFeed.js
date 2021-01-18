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
import Post from "../PostBanner";

export default class ProfilePostFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataSource: [],
    isLoading: true,
  };

  componentDidMount() {
    var userId = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref("posts");
    ref
      .orderByChild("userId")
      .equalTo(userId)
      .once("value")
      .then((snapshot) => {
        var data = snapshot.val();
        this.setState({
          dataSource: data,
          isLoading: false,
        });
      });
      this.forceUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("a");
    console.log(JSON.stringify(prevState.dataSource));
    console.log(JSON.stringify(this.state.dataSource));
     console.log(Object.is(JSON.stringify(prevState.dataSource),JSON.stringify(this.state.dataSource)));

     if (Object.is(JSON.stringify(prevState.dataSource),JSON.stringify(this.state.dataSource))==false) {
     
     var userId = firebase.auth().currentUser.uid;
     var ref = firebase.database().ref("posts");
     ref
       .orderByChild("userId")
       .equalTo(userId)
       .once("value")
       .then((snapshot) => {
         var data = snapshot.val();
         this.setState({
           dataSource: data,
           isLoading: false,
         });
       });
  }
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
            Post Something!
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
                  Info={this.state.dataSource[item].Info}
                  title={this.state.dataSource[item].title}
                  like={this.state.dataSource[item].like}
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
