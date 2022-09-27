import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native"







const RoundBtn = ({ backgroundColor, color, onButtonPress }) => {
    return (
      <TouchableOpacity onPress={onButtonPress}>
        <View
          style={{
            width: 68,
            height: 48,
            backgroundColor,
            borderRadius: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Inter-Regular", fontSize: 15, color, fontWeight: "500" }}>All</Text>
        </View>
      </TouchableOpacity>
    )
  }

export default RoundBtn