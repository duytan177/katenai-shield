import React from "react";
import { StyleSheet, Text } from "react-native";

export const VerifyButton = ({ title }: any) => {
  return <Text style={styles.buttonVerify}>{title}</Text>;
};

const styles = StyleSheet.create({
  buttonVerify: {
    fontSize: 10,
    color: "#FFFFFF",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
