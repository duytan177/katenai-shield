import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import OnboardingScreen from "../screens/OnboardScreen";
import Register from "../screens/Register";

export type MainStackParamList = {
  TestScreen: any;
  OnboardingScreen: any;
  Login: any;
  Register: any;
  HomeScreen: any;
  HomeTabs: any;
};

const MainStack = createStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name="TrackScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FakeCallScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SosScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RecordScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* Thêm các tab khác ở đây nếu cần */}
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Register" component={Register} />

      {/* Điều hướng vào HomeTabs nếu đã đăng nhập hoặc đã hoàn thành onboarding */}
      <MainStack.Screen
        name="HomeTabs"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
