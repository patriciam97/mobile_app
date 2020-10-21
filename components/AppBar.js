import React, { Component } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
  },
});
export default class AppBar extends Component {
  render() {
    return (
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => console.log("Pressed menu")}
        />
        <Appbar.Content title="The Wee Curry Shop" titleStyle={styles.title} />
      </Appbar.Header>
    );
  }
}
