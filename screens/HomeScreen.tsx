import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colorsApp } from "../assets/colors/colorsApp";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME</Text>
      <Image
        source={require("../assets/fox-emoji.png")}
        style={styles.picture}
      ></Image>
      <Pressable
        style={styles.button}
        accessibilityLabel="Buton para al usuario"
        //onPress={}
      >
        <Text style={styles.butonText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colorsApp.black,
    justifyContent: "center",
  },
  button: {
    borderRadius: 10,
    backgroundColor: colorsApp.purple,
    width: "90%",
    paddingVertical: "5%",
    alignItems: "center",
    marginVertical: 20,
  },
  butonText: {
    fontSize: 20,
    color: colorsApp.white,
  },
  welcome: {
    fontSize: 50,
    fontWeight: "bold",
    color: colorsApp.white,
    marginTop: "-15%",
  },
  picture: {
    width: "10%",
    height: "5%",
  },
});
