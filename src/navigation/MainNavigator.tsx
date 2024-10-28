import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

export type MainStackParamList = {
    HomeScreen: any;
    LoginScreen: any;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="HomeScreen">
        <MainStack.Screen        
          name="HomeScreen"
          options={{ headerShown: false }}
          component={Home}/>
        <MainStack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
          component={Login}/>
    </MainStack.Navigator>
  );
};

export default MainNavigator;
