import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/screens/HomeScreen";
import { UploadScreen } from "./src/screens/UploadScreen";
import { ScanScreen } from "./src/screens/ScanScreen";
import { NotificationScreen } from "./src/screens/NotificationScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { Entypo, Feather, AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => 
              (
                <Entypo name="home" size={24} color={color} />
              )
            
          }}
        />
        <Tab.Screen name="Upload" component={UploadScreen} 
         options={{
          tabBarIcon: ({ focused, color, size }) => 
            (
              <FontAwesome name="pencil" size={24} color={color} />
            )
          
        }}
        />
        <Tab.Screen name="Scan" component={ScanScreen}
         options={{
          tabBarIcon: ({ focused, color, size }) => 
            (
              <Entypo name="home" size={24} color={color} />
            )
          
        }}
        />
        <Tab.Screen name="Notification" component={NotificationScreen} 
         options={{
          tabBarIcon: ({ focused, color, size }) => 
            (
              <FontAwesome name="bell" size={24} color={color} />
            )
          
        }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} 
         options={{
          tabBarIcon: ({ focused, color, size }) => 
            (
              <Ionicons name="person" size={24} color={color} />
            )
          
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
