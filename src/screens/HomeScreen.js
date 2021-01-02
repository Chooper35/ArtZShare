import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FollowerPostFeed from '../components/FollowerPostFeed'
import PostFeed from '../components/PostFeed'
import PostScreen from './PostScreen'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <View style={styles.container}>
                <PostScreen></PostScreen>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
