import React from "react";
import { Text, Platform } from "react-native";
import { material } from "react-native-typography";
import { human } from "react-native-typography";

import defaultStyles from "../config/styles";

export default function AppText({ children, style }) {
  return (
    <Text
      style={[
        defaultStyles.text,
        Platform.OS === "android" ? material.body1 : human.body,
        style,
      ]}
    >
      {children}
    </Text>
  );
}
