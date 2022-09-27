import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  label: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 8,
    color: "#2E3E5C",
  },

  Pancake: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 17,
    lineHeight: 27,
    marginTop: 16,
    marginLeft: 24,
    color: "#3E5481",
  },

  Fd60: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 24,
    color: "#9FA5C0"
  },

  Fd61: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    color: "#9FA5C0",
    marginLeft: 8
  },

  ellp: {
    width: 5,
    height: 5,
    marginLeft: 8
  },

  container: {
    paddingTop: 50,
  },
  passport1: {
    width: 31,
    height: 31,
    borderRadius: 11,
    alignSelf: "flex-start",
    marginLeft: 24,
  },

  img1: {
    width: 151,
    height: 151,
    borderRadius: 15,
    marginTop: 16,
    marginLeft: 24,
  },
});


const Body = () => {
  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.passport1}
          source={require("../../assets/Images/passport1.png")}
        />
        <Text style={styles.label}>Calum Lewis</Text>
      </View>

      <Image style={styles.img1} source={require("../../assets/Images/img1.png")} />
      <Text style={styles.Pancake}>Pancake</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.Fd60}>Food</Text>
        <Image
          style={styles.ellp}
          source={require("../../assets/Images/ellipse.png")}
        />
        <Text style={styles.Fd61}>{">"} 60mins </Text>
      </View>
    </>
  );
};

export default Body;