import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FollowerPostFeed from '../components/FollowerPostFeed'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FollowerPostFeed></FollowerPostFeed>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
