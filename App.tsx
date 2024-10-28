import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import OnboardScreen from "./src/screens/OnboardingScreen/OnboardScreen";

const Stack = createStackNavigator();

export default function App() {
  const Container = Platform.OS === "ios" ? View : SafeAreaView;

  return (
    <NavigationContainer>
      <Container style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboardingScreen" component={OnboardScreen} />
          <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
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
