import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import Notification from "../components/Notification";

export default class NotificationScreen extends Component {
  _renderPost() {
    return <Notification></Notification>;
  }
  _returnKey(item) {
    return item.toString();
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
        <FlatList
            data={[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13]}
            keyExtractor={this._returnKey}
            renderItem={() => this._renderPost()}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#E7E1FA",
    padding:20,
  }
});
