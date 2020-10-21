import { StatusBar } from "expo-status-bar";
import React from "react";
import AppBar from "./components/AppBar";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomePage from "./components/HomePage";
import { theme } from "./theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          alignContent: "center",
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignContent: "center",
            marginTop: 20,
          }}
        >
          <AppBar></AppBar>
        </SafeAreaView>
        <SafeAreaView
          style={{
            backgroundColor: theme.colors.primary,
            flex: 11,
            alignContent: "center",
          }}
        >
          <HomePage></HomePage>
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
