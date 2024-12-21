import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./src/navigation/MainNavigator";

const Stack = createStackNavigator();

import {
  setNotificationHandler,
  requestPermissions,
} from "./src/helpers/pushNotifications";

requestPermissions();

setNotificationHandler();

export default function App() {
  const Container = Platform.OS === "ios" ? View : SafeAreaView;

  return (
    <NavigationContainer>
      <Container style={styles.container}>
        <StatusBar style="auto" />
        <MainNavigator />
      </Container>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
