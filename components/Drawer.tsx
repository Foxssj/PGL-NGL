import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import InfoUser from "../screens/Porfolio";
import { colorsApp } from "../assets/colors/colorsApp";
import { RenderCardListContext } from "../contexts/LoginContext";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerStyle: {
      backgroundColor: colorsApp.purple,
    },
    headerTintColor: colorsApp.white,
    drawerItemStyle: {
      width: "90%",
    },
    drawerStyle: {
      backgroundColor: colorsApp.black,
    },
    drawerActiveTintColor: colorsApp.white,
    drawerActiveBackgroundColor: colorsApp.purple,
    drawerInactiveTintColor: colorsApp.light_gray,
    drawerInactiveBackgroundColor: colorsApp.gray,
    drawerType: "front",
  };

  let { isListRendered, toggleIsListRendered } = useContext(
    RenderCardListContext
  );

  return !isListRendered ? (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
    </Drawer.Navigator>
  ) : (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
      backBehavior="initialRoute"
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="Portfolio"
        component={InfoUser}
        options={{ title: "Portfolio" }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  headerContainer: {},
  headerTitle: {},
});
