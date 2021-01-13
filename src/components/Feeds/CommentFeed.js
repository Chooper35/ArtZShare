import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Comment from "../Comment";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571cce29d72",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557s1cce29d72",
  },
  {
    id: "58694a0f-3da1-47s1f-bd96-14557s1cce29d72",
  },
];

export default function CommentFeed() {
  const renderComment = ({ comment }) => <Comment />;

  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>Comments</Text>  
        <FlatList
          data={DATA}
          renderItem={renderComment}
          keyExtractor={(comment) => comment.id}
        />
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    backgroundColor: "#F5F0F6",
  },
  titleFont: {
    margin: 10,
    fontSize: 20,
  },
});
