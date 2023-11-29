import { ImageProps } from "react-native";

export type PersonalData = {
  image: ImageProps;
  description: string;
};

export const information: PersonalData = {
  image: require("../assets/Nicanor.jpg"),
  description:
    "Soy Nicanor, estoy en segundo de Dam. \n" +
    "Tengo 20 años y nací el 16/06/2003" +
    "No me cuento mucho, me gusta aprender y jugar videojuegos.",
};
