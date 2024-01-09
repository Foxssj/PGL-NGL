import * as React from "react";

import { ScrollView, StyleSheet, Text } from "react-native";
import { colorsApp } from "../assets/colors/colorsApp";

const HobbiesNicanor = () => {
  return (
    <>
      <Text
        style={{
          color: colorsApp.white,
          fontWeight: "900",
          textTransform: "capitalize",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        cosas que me gustan mucho:
      </Text>
      <ScrollView style={{ padding: 10 }}>
        {[
          "Jugar videojuegos",
          "Montar en bicicleta",
          "Hacer senderismo",
          "Salir con amigos",
          "Ver y hacer videos de videojuegos",
          "Ir al cine",
          "Pasar tiempo con la familia",
          "Hacer el loco",
        ].map((item) => (
          <Text key={item} style={styles.arrThings}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  arrThings: {
    borderColor: colorsApp.black,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: colorsApp.white,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: colorsApp.purple,
  },
});

export default HobbiesNicanor;
