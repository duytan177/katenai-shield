import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import KatenaiShield from './src/screens/KatenaiShield';


export default function App() {
  return (
    // <Provider store={store}``>
      <NavigationContainer>
        <KatenaiShield />
      </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
