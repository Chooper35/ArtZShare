import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import FollowerPostFeed from "../components/Feeds/FollowerPostFeed";
import ProfileBanner from "../components/ProfileBanner";
import { Searchbar } from "react-native-paper";
import * as firebase from "firebase";
var _ = require("lodash");

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dataSource: [],
    isLoading: true,
    query: "",
    fullData: [],
  };

    
 
  // handleSearch = (text) => {
  //   const formatQuery = text.toLowerCase();
  //   var arr=Object.values(this.state.fullData);
  //   console.log("ARR"+ JSON.stringify(arr));
  //   console.log("result"+result);
  //   var result=arr.filter(el=>el.toLowerCase().indexOf(formatQuery.toLowerCase())!==-1)
  //   this.setState({
  //     query: formatQuery,
  //     dataSource:result,
  //   });
  // };

  componentDidMount() {
    var userList = firebase
      .database()
      .ref("users")
      .once("value")
      .then((snapshot) => {
        var data = snapshot.val();
        this.setState({
          dataSource: data,
          fullData: data,
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
        <Searchbar
          placeholder="Search"
          style={styles.searchBar}
        ></Searchbar>
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
  searchBar: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
