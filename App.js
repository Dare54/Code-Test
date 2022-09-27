// import * as React from "react";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/screens/HomeScreen";
import { UploadScreen } from "./src/screens/UploadScreen";
import { ScanScreen } from "./src/screens/ScanScreen";
import { NotificationScreen } from "./src/screens/NotificationScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import {
  Entypo,
  Feather,
  AntDesign,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import {
  createNativeStackNavigator,
  headerSearchBarOptions,
} from "@react-navigation/native-stack";
import { Body, RoundBtn, SearchBar } from "./src/components";

// const Tab = createBottomTabNavigator();
// const s = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
// });



export default () => {
  //   const [name, setName] = useState("");

  // export default function App() {
  //   const [bgColor, setBgColor] = React.useState("#1FCC79")
  //   const [textColor, setTextColor] = React.useState("white")
  //   const [state, setState] = React.useState(false)
  const [loaded] = useFonts({
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  //

  //   const onButtonPress = () => {
  //     // console.warn("Pressed!")
  //     setState(!state)
  //     // console.log(state)
  //     setBgColor(state ? "#1FCC79" : "#F4F5F7") // if state == true setB() else setB()
  //     setTextColor(state ? "#FFFFFF" : "#9FA5C0")
  //   }

  return (
    // <>
    <View style={{ justifyContent: "center", flex: 1 }}>
      <SearchBar/>
      <Body/>
      <Body/>
    </View>
  );
};
