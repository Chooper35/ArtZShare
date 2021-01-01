import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function ProfileUpdateScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.profilePic}
          source={require("../../assets/profile.png")}
        ></Image>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder="Ad"
        autoCapitalize="none"
        placeholderTextColor="#808080"
      ></TextInput>
        <TextInput
        style={styles.textInput}
        placeholder="Kullanıcı adı"
        autoCapitalize="none"
        placeholderTextColor="#808080"
      ></TextInput>
        <TextInput
        style={styles.textInput}
        placeholder="Açıklama"
        autoCapitalize="none"
        placeholderTextColor="#808080"
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    width: 300,
    height: 50,
    margin: 5,
    borderRadius: 5,
  },
});
