import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeScreen} from "./src/screens/HomeScreen";

const Tab = createBottomTabNavigator();
const s = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default function App() {
  const [loaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
 <Tab.Screen name="fg" component={HomeScreen} />
  <Tab.Screen name="i;i" component={HomeScreen} />
   <Tab.Screen name="jhk" component={HomeScreen} />
    <Tab.Screen name="asd" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
