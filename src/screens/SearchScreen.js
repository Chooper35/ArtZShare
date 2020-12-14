import React, { Component } from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Searchbar } from "react-native-paper";
import PostFeed from "../components/PostFeed";
import TagContainer from "../components/TagContainer";

export default class HomeScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TagContainer></TagContainer>
        <Searchbar placeholder="Search" style={styles.searchBar}></Searchbar>
        <View
          style={{
            borderBottomColor: "purple",
            borderBottomWidth: 2,
            margin:10,
          }}
        />
        <PostFeed></PostFeed>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  searchBar:{
    marginHorizontal:10,
    marginVertical:5,
  }
});