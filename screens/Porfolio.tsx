import { StyleSheet, Text, View } from "react-native";
import { ShowPortfolio } from "../components/ShowPortfolio";
import React, { useState } from "react";
import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { QRCodeSection } from "../components/QRCodeSection";
import { colorsApp } from "../assets/colors/colorsApp";
import { TabBar } from "react-native-tab-view";
import { RenderCardListContext } from "../contexts/LoginContext";

const Portfolio = () => {
  const Tab = createMaterialTopTabNavigator();
  let { userName } = React.useContext(RenderCardListContext);

  const TabNavigatorScreenOptions: MaterialTopTabNavigationOptions = {
    tabBarInactiveTintColor: colorsApp.light_gray,
    tabBarActiveTintColor: colorsApp.white,
    tabBarStyle: { backgroundColor: colorsApp.purple },
    tabBarPressColor: colorsApp.fuchsia,
    tabBarIndicatorStyle: { backgroundColor: colorsApp.fuchsia },
  };

  return (
    <Tab.Navigator
      initialRouteName={userName}
      screenOptions={TabNavigatorScreenOptions}
    >
      <Tab.Screen name="User info" component={ShowPortfolio} />
      <Tab.Screen name="User QR" component={QRCodeSection} />
    </Tab.Navigator>
  );
};

export default Portfolio;

const styles = StyleSheet.create({});
