import React from "react";
import { View, TextInput, Platform, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { material } from "react-native-typography";
import { human } from "react-native-typography";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[
          defaultStyles.text,
          Platform.OS === "android" ? material.body1 : human.body,
        ]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});
