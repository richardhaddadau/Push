import React from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";

const MainScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
      }}
    >
      <View
        style={{
          padding: 20,
          width: "100%",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#e1e1e1",
          backgroundColor: "white",
        }}
      >
        <Text>Main</Text>
        <Octicons name="sync" size={28} color="black" />
      </View>

      {/* Footer */}
      <View
        style={{
          position: "absolute",
          flexDirection: "row",

          padding: 10,

          justifyContent: "space-between",
          alignItems: "center",

          width: "95%",
          bottom: 0,

          borderTopWidth: 1,
          borderTopColor: "#e1e1e1",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Template")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Octicons name="note" size={28} color="black" />
            <Text style={{ marginLeft: 10 }}>Set up Template</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("History Log")}
        >
          <View style={{ flexDirection: "row" }}>
            <Octicons name="history" size={28} color="black" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default MainScreen;
