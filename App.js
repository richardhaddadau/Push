import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import GuestStack from "./src/navigation/GuestStack";
import AccessStack from "./src/navigation/AccessStack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";

const BaseBar = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: insets.bottom,
        backgroundColor: "#121212",
      }}
    >
      <Text> </Text>
    </View>
  );
};

export default function App() {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(true);

  // Load Detail
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          {isLoading ? (
            <SplashScreen />
          ) : isSignedIn ? (
            <AccessStack />
          ) : (
            <GuestStack />
          )}
        </SafeAreaView>
        <BaseBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
