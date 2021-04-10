import React from "react";
import { StyleSheet, View, Text } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
