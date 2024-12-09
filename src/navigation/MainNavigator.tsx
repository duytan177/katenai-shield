import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, TouchableOpacity, Text } from "react-native"; // Thêm Text để tùy chỉnh label
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import OnboardingScreen from "../screens/OnboardScreen";
import Register from "../screens/Register";
import track from "../assets/images/track.png";
import fakecall from "../assets/images/fakecall.png";
import record from "../assets/images/record.png";
import profile from "../assets/images/profile.png";
import sosImage from "../assets/images/sos.png";

// Định nghĩa màu sắc chung
const COLORS = {
  active: "#B287ED", // Màu khi tab được focus
  inactive: "#433878", // Màu khi tab không được focus
  sosButton: "#A9C0FF", // Màu nút SOS
  sosButtonInner: "#A590FB", // Màu lớp trong của nút SOS
  white: "#FFFFFF", // Màu trắng
};

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
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          height: 100,
          paddingHorizontal: 5,
        },
        tabBarItemStyle: {
          paddingTop: 23,
        },
      }}
    >
      <Tab.Screen
        name="Track"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={track}
              style={{
                width: 22,
                height: 29,
                tintColor: focused ? COLORS.active : COLORS.inactive,
                marginBottom: 14,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.active : COLORS.inactive,
                fontSize: 12,
              }}
            >
              Track
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Fakecall"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={fakecall}
              style={{
                width: 22,
                height: 30,
                tintColor: focused ? COLORS.active : COLORS.inactive,
                marginBottom: 14,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.active : COLORS.inactive,
                fontSize: 12,
              }}
            >
              Fakecall
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="SOS"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                position: "absolute",
                bottom: -25,
                left: "50%",
                transform: [{ translateX: "-50%" }],
                zIndex: 999,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Ba lớp hình tròn */}
              <View
                style={{
                  position: "absolute",
                  backgroundColor: COLORS.white,
                  width: 95,
                  height: 95,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  backgroundColor: COLORS.sosButton,
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 2,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  backgroundColor: COLORS.sosButtonInner,
                  width: 65,
                  height: 65,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 3,
                }}
              />
              <Image
                source={sosImage}
                style={{
                  width: 50,
                  height: 22,
                  zIndex: 4,
                  tintColor: undefined,
                }}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.active : COLORS.inactive,
                fontSize: 12,
              }}
            >
              SOS
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Record"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={record}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.active : COLORS.inactive,
                marginBottom: 14,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.active : COLORS.inactive,
                fontSize: 12,
              }}
            >
              Record
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={profile}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.active : COLORS.inactive,
                marginBottom: 14,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.active : COLORS.inactive,
                fontSize: 12,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Register" component={Register} />
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="HomeTabs"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
