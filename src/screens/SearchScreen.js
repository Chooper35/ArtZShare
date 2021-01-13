import React, { Component } from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Searchbar } from "react-native-paper";
import PostFeed from "../components/Feeds/PostFeed";
import TagContainer from "../components/Feeds/TagContainer";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TagContainer></TagContainer>
      
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
