import React, { Component } from "react";
import { Text, StyleSheet, View ,Image} from "react-native";
import { Divider } from "react-native-paper";

export default class FollowerPost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.photo}
            source={require("../../assets/image1.jpg")}
          />
        </View>
        <View
          style={{
            margin: 5,
            borderBottomColor: "black",
            borderBottomWidth: 5,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",

    },
    photo:{
        width:380,
        height:380,
    }
});
