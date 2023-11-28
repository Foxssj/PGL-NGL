import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, Theme } from "@react-navigation/native";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import { RenderCardListProvider } from "./providers/RenderLoginProvider";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <RenderCardListProvider>
        <Header></Header>
        <NavigationContainer>
          <Drawer></Drawer>
          <StatusBar style="auto" />
        </NavigationContainer>
      </RenderCardListProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
