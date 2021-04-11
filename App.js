import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MessagesScreen from "./app/screens/MessagesScreen";
export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
