import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import ProfileScreen from "../screens/ProfileScreen";
import * as RootNavigation from "../components/RootNavigation";

export default class ProfileBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>RootNavigation.navigate("Another",{userId:this.props.userId})}>
          <View style={styles.altContainer}>
            <Image
              style={styles.profilePic}
              source={{ uri: this.props.photoURL }}
            ></Image>
            <View>
              <Text style={styles.userNameStyle}>{this.props.userName}</Text>
              <Text style={styles.nameStyle}>{this.props.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",      
            borderBottomColor: "black",
            borderBottomWidth: 0.5,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 1,
  },
  altContainer: {
    backgroundColor: "#edf6f9",
    borderRadius:10,
    flexDirection: "row",
    alignItems: "center",
    padding:5,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userNameStyle: {
    color: "#03045e",
    marginLeft: 10,
  },
  nameStyle: {
    marginLeft: 10,
  },
});
