import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button,Divider ,Switch } from 'react-native-paper'
import * as RootNavigation from '../components/RootNavigation'

export default function SettingsScreen({navigation},props) {
    return (
        <ScrollView>
            <Button onPress={ () => navigation.navigate("UpdateProfile") } >Update Profile</Button>
            <Divider></Divider>
            <Button onPress={ () => navigation.navigate("UpdatePassword") } >Update Password</Button>
            <Divider></Divider>
            <Button onPress={ () => navigation.navigate("UpdateEmail") } >Update Email</Button>
            <Divider></Divider>
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
