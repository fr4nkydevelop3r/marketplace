import React from "react";
import { Text, Platform } from "react-native";
import { material } from "react-native-typography";
import { human } from "react-native-typography";

export default function AppTitle({ children }) {
  return (
    <Text style={Platform.OS === "android" ? material.headline : human.title1}>
      {children}
    </Text>
  );
}
