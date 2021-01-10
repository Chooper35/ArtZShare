import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

export default class Tag extends Component {
  render() {
    return (
      <TouchableOpacity  style={styles.tagContainer}>
        <View>
          <Text style={styles.tagText}>#köpek</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tagContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    margin: 10,
    backgroundColor: "#535A75",
    borderRadius: 10,
    alignItems: "baseline",
  },
  tagText: {
    fontStyle: "italic",
    fontSize: 15,
    color: "#fff",
  },
});
