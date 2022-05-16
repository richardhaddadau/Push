import React from "react";
import { View, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Welcome</Text>
    </View>
  );
};

export default WelcomeScreen;
