import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const StepsScreen = () => {
  // State
  const [stepOneDone, setStepOneDone] = useState(true);
  const [stepTwoDone, setStepTwoDone] = useState(true);
  const [stepThreeDone, setStepThreeDone] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Step 1 */}
      <View style={styles.setupItem}>
        {stepOneDone ? (
          <Octicons
            name="issue-closed"
            size={28}
            color="green"
            style={styles.setupIcon}
          />
        ) : (
          <Octicons
            name="issue-draft"
            size={28}
            color="gray"
            style={styles.setupIcon}
          />
        )}
        <Text
          style={[styles.setupLabel, { color: stepOneDone ? "green" : "gray" }]}
        >
          Login to Store
        </Text>
      </View>

      {/* Step 2 */}
      <View style={styles.setupItem}>
        {stepTwoDone ? (
          <Octicons
            name="issue-closed"
            size={28}
            color="green"
            style={styles.setupIcon}
          />
        ) : (
          <Octicons
            name="issue-draft"
            size={28}
            color="gray"
            style={styles.setupIcon}
          />
        )}
        <Text
          style={[styles.setupLabel, { color: stepTwoDone ? "green" : "gray" }]}
        >
          Login to Trello
        </Text>
      </View>

      {/* Step 3 */}
      <View style={styles.setupItem}>
        {stepThreeDone ? (
          <Octicons
            name="issue-closed"
            size={28}
            color="green"
            style={styles.setupIcon}
          />
        ) : (
          <Octicons
            name="issue-draft"
            size={28}
            color="gray"
            style={styles.setupIcon}
          />
        )}
        <Text
          style={[
            styles.setupLabel,
            { color: stepThreeDone ? "green" : "gray" },
          ]}
        >
          You're Ready to Push
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setupItem: {
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  setupIcon: {
    marginRight: 10,
  },
  setupLabel: {
    fontSize: 16,
  },
});

export default StepsScreen;
