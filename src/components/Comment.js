import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";
import { Divider } from "react-native-paper";

export default function Comment() {
  return (
    <View >
      <View style={styles.container}>
      <Image
        source={require("../../assets/image2.jpg")}
        style={styles.profilePic}
      ></Image>
      <Text>Yorum yorum</Text>
     
      </View>
     
      <View
          style={{
        
            borderBottomColor: "black",
            borderBottomWidth: 0.5,
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 2,
    flexDirection:"row",
    alignItems:"center",

  },
  profilePic: {
      marginHorizontal:10,
    borderRadius: 50,
    width: 30,
    height: 30,
  },
});
