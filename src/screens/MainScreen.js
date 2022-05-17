import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

const MainScreen = ({ navigation }) => {
  // States
  const [trelloBoard, setTrelloBoard] = useState(null);
  const [trelloList, setTrelloList] = useState(null);
  const [syncFrom, setSyncFrom] = useState(null);

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
          {/* Trello Board */}
          <Text style={styles.optionHeading}>
            Choose a Trello Board to Sync to:
          </Text>
          <RNPickerSelect
            placeholder={{ label: "Select a Trello board..", value: null }}
            onValueChange={(value) => setTrelloBoard(value)}
            items={[
              { label: "First Item", value: "1" },
              { label: "Second Item", value: "2" },
              { label: "Third Item", value: "3" },
            ]}
          />

          {/* Trello List */}
          {trelloBoard === null ? null : (
            <View
              style={{
                paddingTop: 10,
                borderTopWidth: 1,
                borderColor: "#e1e1e1",
              }}
            >
              <Text style={styles.optionHeading}>
                Choose a Trello List to Sync to:
              </Text>
              <RNPickerSelect
                placeholder={{ label: "Select a Trello List..", value: null }}
                onValueChange={(value) => setTrelloList(value)}
                items={[
                  { label: "First Item", value: "1" },
                  { label: "Second Item", value: "2" },
                  { label: "Third Item", value: "3" },
                ]}
              />
            </View>
          )}
        </View>
      </View>

      {/* Sync Settings Card */}
      {trelloList === null ? null : (
        <View style={styles.cardWrapper}>
          <Text style={styles.cardTitle}>Sync Settings</Text>
          <View style={styles.cardBody}>
            <Text style={styles.optionHeading}>
              When do you want to sync from?
            </Text>
            <RNPickerSelect
              placeholder={{ label: "Choose option..", value: null }}
              onValueChange={(value) => setSyncFrom(value)}
              items={[
                { label: "Beginning of Time", value: "beginningOfTime" },
                { label: "From Order Number", value: "fromOrderNumber" },
              ]}
            />

            {/* Beginning of Time Settings */}
            {syncFrom === null ? null : syncFrom ===
              "beginningOfTime" ? null : (
              <View
                style={{
                  paddingTop: 10,
                  borderTopWidth: 1,
                  borderColor: "#e1e1e1",
                }}
              >
                <Text style={styles.optionHeading}>
                  Choose a store order to sync from:
                </Text>
                <RNPickerSelect
                  placeholder={{ label: "Choose a store order..", value: null }}
                  onValueChange={(value) => setTrelloList(value)}
                  items={[
                    { label: "First Item", value: "1" },
                    { label: "Second Item", value: "2" },
                    { label: "Third Item", value: "3" },
                  ]}
                />
              </View>
            )}
          </View>
        </View>
      )}

      {/* Sync */}
      {syncFrom === null ? null : (
        <View style={{ paddingTop: 10 }}>
          <Button title={"Sync Now"} color={"#DB3E00"} />
        </View>
      )}

      {/* Footer */}
      <View
        style={{
          position: "absolute",
          flexDirection: "row",

          padding: 10,

          justifyContent: "space-between",
          alignItems: "center",

          width: "100%",
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
    backgroundColor: "#DB3E00",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  cardBody: {
    padding: 10,
  },
  optionHeading: {
    marginBottom: 10,
    fontSize: 14,
    color: "#a7a7a7",
  },
});

export default MainScreen;
