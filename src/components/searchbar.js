import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 56,
    borderRadius: 32,
    padding: 12,
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "lime",
  },
  label: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: "#F4F5F7",
  },
  input: {
    lineHeight: 18,
    fontSize: 20,
    paddingTop: 8,
    textAlign: "center",
  },
});

const SearchBar = () => {
    const [name, setName] = React.useState("");

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color="#3E5481"
        style={{ marginRight: 16 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        onChangeText={(text) => setName(text)}
        value={name}
      />
    </View>
  );
};

export default SearchBar;
