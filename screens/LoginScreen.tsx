import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import users from "../interfaces/users";
import React, { useContext, useState } from "react";
import { colorsApp } from "../assets/colors/colorsApp";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RenderCardListContext } from "../contexts/LoginContext";

const LoginScreen = () => {
  const [inputUsuario, setInputUsuario] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const { toggleIsListRendered, setUserName } = useContext(
    RenderCardListContext
  );

  const handleChangeUsuario = (text: string) => {
    setInputUsuario(text);
  };
  const handleChangePassword = (text: string) => {
    setInputPassword(text);
  };

  const handleLogin = () => {
    let userIn = false;
    for (let index = 0; index < users.length; index++) {
      if (
        inputUsuario == users[index].nombre &&
        inputPassword == users[index].password
      ) {
        setUserName(inputUsuario);
        toggleIsListRendered();
        userIn = true;
        alert("Login successful");
      }
    }
    if (userIn == false) {
      alert("Login Failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LOG-IN</Text>
      <Text style={styles.welcoming}>WELCOME</Text>

      <TextInput
        placeholder="USERNAME"
        placeholderTextColor={colorsApp.white}
        style={styles.inputs}
        onChangeText={handleChangeUsuario}
      ></TextInput>
      <TextInput
        placeholder="PASSWORD"
        secureTextEntry
        placeholderTextColor={colorsApp.white}
        style={styles.inputs}
        onChangeText={handleChangePassword}
      ></TextInput>

      <Pressable
        style={styles.button}
        accessibilityLabel="Buton para al usuario"
        onPress={() => handleLogin()}
      >
        <Text style={styles.butonText}>LOGIN</Text>
      </Pressable>

      <Text style={styles.passwordForgot}>Forgot Password?</Text>
    </View>
  );
};

export default LoginScreen;

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
  header: {
    fontSize: 70,
    fontWeight: "bold",
    color: colorsApp.white,
    marginTop: "-15%",
    textDecorationLine: "underline",
  },
  welcoming: {
    color: colorsApp.white,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: "8%",
  },
  inputs: {
    borderStyle: "solid",
    borderWidth: 2,
    width: "90%",
    borderRadius: 4,
    borderColor: colorsApp.purple,
    paddingVertical: "2%",
    paddingHorizontal: 20,
    marginBottom: "4%",
    color: colorsApp.white,
  },
  passwordForgot: {
    color: colorsApp.white,
    alignSelf: "flex-end",
    marginRight: 20,
  },
});
