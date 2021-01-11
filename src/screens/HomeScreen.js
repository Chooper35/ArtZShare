import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import FollowerPostFeed from "../components/FollowerPostFeed";
import ProfileBanner from "../components/ProfileBanner";
import { Searchbar } from "react-native-paper";
import * as firebase from "firebase";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dataSource: [],
    isLoading: true,
  };

  componentDidMount() {
    var userList = firebase
      .database()
      .ref("users")
      .once("value")
      .then((snapshot) => {
        var data = snapshot.val();
        this.setState({
          dataSource: data,
          isLoading: false,
        });
        console.log(JSON.stringify(data));
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataSource.lenght != this.state.dataSource.length) {
      var userList = firebase
        .database()
        .ref("users")
        .once("value")
        .then((snapshot) => {
          var data = snapshot.val();
          this.setState({
            dataSource: data,
            isLoading: false,
          });
          console.log(JSON.stringify(data));
        });
    }
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
      <View>
        <Searchbar placeholder="Search"></Searchbar>
        <View>
          <FlatList
            data={Object.keys(this.state.dataSource)}
            renderItem={({ item }) => (
              <ProfileBanner
                userId={this.state.dataSource[item].uid}
                userName={this.state.dataSource[item].userName}
                photoURL={this.state.dataSource[item].photoURL}
                name={this.state.dataSource[item].name}
              ></ProfileBanner>
            )}
            numColumns={1}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
