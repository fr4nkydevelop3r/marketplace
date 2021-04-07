import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppTitle from "./app/components/AppTitle";

export default function App() {
  return (
    <View style={styles.container}>
      <AppTitle>React native rules!</AppTitle>
      <AppText>Hola mundo</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
