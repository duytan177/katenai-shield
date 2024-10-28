import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";
import React from "react";

const Home = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.startText}>Hello Home</Text>
      <Pressable style={styles.startButton}>
        <Text style={styles.startText}>Start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  startButton: {
    marginBottom: 15,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 35,
    borderCurve: "continuous",
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(2),
    fontWeight: theme.frontWeights.medium,
    // letterSpacing: 1,
  },
  bottomTab: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Home;
