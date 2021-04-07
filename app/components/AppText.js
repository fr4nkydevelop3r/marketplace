import React from "react";
import { Text, Platform } from "react-native";
import { material } from "react-native-typography";
import { human } from "react-native-typography";

export default function AppText({ children }) {
  return (
    <Text style={Platform.OS === "android" ? material.body1 : human.body}>
      {children}
    </Text>
  );
}
