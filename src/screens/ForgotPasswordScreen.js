import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from 'react-native-paper';


export default function ForgotPasswordScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
         <ImageBackground
        source={require("../../assets/flowers.jpg")}
        style={styles.image}
      >
        <View style={styles.altContainer}>

        
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/key.png")}
        />
        <Text style={styles.textTitle}>FORGOT YOUR PASSWORD?</Text>
        <Text style={styles.textBody}>Enter your email address</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Your Email"
          placeholderTextColor="#808080"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>

      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "#00BFFF",
  },
  altContainer:{
    alignItems:"center",
    backgroundColor: 'rgba(138, 151, 255, 0.4)',
    padding:30,
    margin:20,
    borderRadius:10,
  },
  textTitle: {
    fontStyle: "normal",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems:"center",
    opacity:0.9,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  textBody: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  
  input: {
    width:300,
    margin:5,
    height:50,
  },
  submitButton: {
    marginVertical: 20,
    width: 250,
    padding: 5,
    borderWidth: 0.1,
    borderRadius: 50,
    borderColor: "black",
    backgroundColor:"#E7E1FA",
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 25,
  },
});
