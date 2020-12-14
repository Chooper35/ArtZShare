import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class Notification extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Image
              style={styles.profilePic}
              source={require("../../assets/image2.jpg")}
            ></Image>
                <Text style={styles.textStyle}> Bildirim  </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgba(145, 0, 255, 0.2)',
        marginVertical:5,
        justifyContent:"flex-start",
        alignItems:"center",
        borderRadius:10,
        flexDirection:"row",
    },
    textStyle:{
        fontSize:15,
    },
    profilePic:{
        margin:10,
        width:45,
        height:45,
        borderRadius:50,

    },
})
