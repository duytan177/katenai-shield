import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/HomeScreen";
import OnboardScreen from "./src/screens/OnboardScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

const Stack = createStackNavigator();

export default function App() {
  const Container = Platform.OS === "ios" ? View : SafeAreaView;

  return (
    <NavigationContainer>
      <Container style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboardingScreen" component={OnboardScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
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
