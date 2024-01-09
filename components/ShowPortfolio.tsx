import * as React from "react";
import { StyleSheet, Text, View, Image, ImageProps } from "react-native";
import { PersonalData, information } from "../data/PersonalData";
import HobbiesNicanor from "../data/HobbiesNicanor";
import { colorsApp } from "../assets/colors/colorsApp";

export const ShowPortfolio = () => {
  return (
    <View style={styles.bodystails}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.avatar} source={information.image} />
        <View style={styles.descContainer}>
          <Text
            style={{ textAlign: "center", fontWeight: "700", fontSize: 20 }}
          >
            Descripción sobre mi
          </Text>
          <Text>{information.description}</Text>
        </View>
      </View>
      <HobbiesNicanor />
    </View>
  );
};

const styles = StyleSheet.create({
  bodystails: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colorsApp.black,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descContainer: {
    margin: 10,
    backgroundColor: colorsApp.white,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
});

export default ShowPortfolio;
