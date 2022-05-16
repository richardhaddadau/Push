import React from "react";
import { View, Image, Text } from "react-native";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/*<Text>Welcome</Text>*/}
      <Image source={require("../../assets/app-logo.jpg")} />
    </View>
  );
};

export default SplashScreen;
