import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import TemplateScreen from "../screens/TemplateScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SyncScreen from "../screens/SyncScreen";
import { View, Button, TouchableWithoutFeedback } from "react-native";
import { Octicons } from "@expo/vector-icons";
import SyncHistoryScreen from "../screens/SyncHistoryScreen";

const Stack = createNativeStackNavigator();

const AccessStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerRight: () => (
            <TouchableWithoutFeedback>
              <View>
                <Octicons name="gear" size={28} color="black" />
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Stack.Screen name="Template" component={TemplateScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Sync" component={SyncScreen} />
      <Stack.Screen name="History Log" component={SyncHistoryScreen} />
    </Stack.Navigator>
  );
};

export default AccessStack;
