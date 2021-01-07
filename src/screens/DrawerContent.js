import React ,{useState,useEffect} from "react";
import { StyleSheet, View } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as RootNavigation from "../components/RootNavigation";
import * as firebase from "firebase";

export default function DrawerContent(props) {
  var userId = firebase.auth().currentUser.uid;
  var [username, setUsername] = useState("");
  var [name, setName] = useState("");
  var [pInfo, setpInfo] = useState("");
  var [photoURL, setPhotoURL] = useState("");
  var [followers, setFollower] = useState(0);
  var [follows, setFollows] = useState(0);

  useEffect(() => {
    var userId = firebase.auth().currentUser.uid;
    const onValueChange = firebase
      .database()
      .ref(`/users/${userId}`)
      .on("value", (snapshot) => {
        console.log("Snepşot" + snapshot.val());
        username = (snapshot.val() && snapshot.val().userName) || "Anonymous";
        name = (snapshot.val() && snapshot.val().name) || "Anonymous";
        pInfo = (snapshot.val() && snapshot.val().pInfo) || "Açıklama";
        photoURL = (snapshot.val() && snapshot.val().photoURL) || "Anonymous";
        followers = (snapshot.val() && snapshot.val().follower) || 0;
        follows = (snapshot.val() && snapshot.val().follows) || 0;
        setUsername(username);
        setName(name);
        setpInfo(pInfo);
        setPhotoURL(photoURL);
        setFollower(followers);
        setFollows(follows);
      });
    return () =>
      firebase.database().ref(`/users/${userId}`).off("value", onValueChange);
  }, [userId]);
  function signO() {
    firebase
      .auth()
      .signOut()
      .then(function signOut() {
        props.navigation.navigate("Login");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{uri:photoURL}}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{name}</Title>
                <Caption style={styles.caption}>{username}</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {follows}
                </Paragraph>
                <Caption style={styles.caption}>Takip edilenler</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {followers}
                </Paragraph>
                <Caption style={styles.caption}>Takipçiler</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Ana Ekran"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
            
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profil"
              onPress={() => {
                props.navigation.navigate("Profile");
          
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bell-outline" color={color} size={size} />
              )}
              label="Bildirimler"
              onPress={() => {
                props.navigation.navigate("Notification");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Ayarlar"
              props={props}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Çıkış Yap"
          onPress={() => signO()}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
