import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import OnboardScreen from "./src/screens/OnboardingScreen/OnboardScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

// const clearLocalStorage = async () => {
//   try {
//     await AsyncStorage.removeItem("isAppFirstLaunched");
//     console.log("Local storage cleared.");
//   } catch (error) {
//     console.error("Failed to clear local storage:", error);
//   }
// };

export default function App() {
  // const [isAppFirstLaunched, setIsAppFirstLaunched] =
  //   React.useState<boolean>(false);

  // React.useEffect(() => {
  //   clearLocalStorage();
  //   // Debug dev - uncomment code when run app first
  //   const checkFirstLaunch = async () => {
  //     const appData = await AsyncStorage.getItem("isAppFirstLaunched");
  //     if (appData == null) {
  //       setIsAppFirstLaunched(true);
  //       await AsyncStorage.setItem("isAppFirstLaunched", "false");
  //     } else {
  //       setIsAppFirstLaunched(false);
  //     }
  //   };

  //   checkFirstLaunch();
  // }, []);

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
    paddingTop: Platform.OS === "ios" ? 35 : 0,
    paddingBottom: Platform.OS === "ios" ? 20 : 0,
  },
});
