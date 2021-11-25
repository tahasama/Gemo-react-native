import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Settings = () => {
  return (
    <View style={styles.settings}>
      <Text>Settings</Text>
      <Text>This page is under construction...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
