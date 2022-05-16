import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Button,
  Text,
  TextInput,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";

const MainScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      trelloBoard: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
      }}
    >
      {/* Trello Settings Card */}
      <View style={styles.cardWrapper}>
        <Text style={styles.cardTitle}>Trello Settings</Text>
        <View style={styles.cardBody}>
          <Octicons name="sync" size={28} color="black" />
        </View>
      </View>

      {/* Sync Settings Card */}
      <View style={styles.cardWrapper}>
        <Text style={styles.cardTitle}>Sync Settings</Text>
        <View style={styles.cardBody}>
          <Octicons name="sync" size={28} color="black" />
        </View>
      </View>

      {/* Sync */}
      <View style={{ paddingTop: 10 }}>
        <Button
          title={"Sync Now"}
          color={"#DB3E00"}
          onPress={handleSubmit(onSubmit)}
        />
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

const styles = StyleSheet.create({
  cardWrapper: {
    marginVertical: 5,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    backgroundColor: "white",
    overflow: "hidden",
  },
  cardTitle: {
    padding: 10,
    backgroundColor: "#d7d7d7",
    fontSize: 15,
    fontWeight: "bold",
  },
  cardBody: {
    padding: 10,
  },
});

export default MainScreen;
