import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button,Divider ,Switch } from 'react-native-paper'
import * as RootNavigation from '../components/RootNavigation'

export default function SettingsScreen() {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <ScrollView>
            <Button onPress={ () => alert("lelel")} >Bilgilerini güncelle</Button>
            <Divider></Divider>
            <Button onPress={ () => alert("lelel")} >Bilmiyom burası ne</Button>
            <Divider></Divider>
            <Button onPress={ () => alert("lelel")} >Kaydedilenler</Button>
            <Divider></Divider>
            <Button onPress={ () => alert("lelel")} >Çıkış Yap</Button>
            <Divider></Divider>
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
