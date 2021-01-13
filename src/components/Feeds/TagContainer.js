import React, { Component } from "react";
import { Text, StyleSheet, View,FlatList } from "react-native";
import Tag from "../Tag";

export default class TagContainer extends Component {
  _renderTag() {
    return <Tag></Tag>;
  }
  _returnKey(item) {
    return item.toString();
  }
  render() {
    return (
      <View>
        <View>
        <FlatList
            data={[1, 2, 3, 4, 5,6,7,8,9,10,11,12]}
            keyExtractor={this._returnKey}
            horizontal={true}
            renderItem={() => this._renderTag()}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
