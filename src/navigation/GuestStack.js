import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StoreChoiceScreen from "../screens/StoreChoiceScreen";
import StoreLoginScreen from "../screens/StoreLoginScreen";
import TrelloLoginScreen from "../screens/TrelloLoginScreen";
import StepsScreen from "../screens/StepsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen name="Welcome" component={WelcomeScreen} />*/}
      <Stack.Screen name="Setup" component={StepsScreen} />
      <Stack.Screen name="Choose Store" component={StoreChoiceScreen} />
      <Stack.Screen name="Store Login" component={StoreLoginScreen} />
      <Stack.Screen name="Trello Login" component={TrelloLoginScreen} />
    </Stack.Navigator>
  );
};

export default GuestStack;
