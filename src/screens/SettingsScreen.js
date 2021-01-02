import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button,Divider ,Switch } from 'react-native-paper'
import * as RootNavigation from '../components/RootNavigation'
import UpdateProfile from '../screens/ProfileUpdateScreen'

export default function SettingsScreen({navigation},props) {
    return (
        <ScrollView>
            <Button onPress={ () => console.log("Setting props == " + JSON.stringify(props) ) } >Bilgilerini güncelle</Button>
            <Divider></Divider>
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
