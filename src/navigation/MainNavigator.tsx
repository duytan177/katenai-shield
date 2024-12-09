import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, TouchableOpacity } from "react-native"; // Thêm TouchableOpacity để tạo button tùy chỉnh
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import OnboardingScreen from "../screens/OnboardScreen";
import Register from "../screens/Register";
import track from "../assets/images/track.png";
import fakecall from "../assets/images/fakecall.png";
import record from "../assets/images/record.png";
import profile from "../assets/images/profile.png";
import sosImage from "../assets/images/sos.png"; // Đường dẫn tới hình ảnh chữ SOS

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
          backgroundColor: "white", // Màu nền trắng
          borderTopLeftRadius: 35, // Bo tròn góc trên trái
          borderTopRightRadius: 35, // Bo tròn góc trên phải
          height: 100, // Chiều cao của tab bar
          paddingHorizontal: 4,
        },
        tabBarItemStyle: {
          flex: 1, // Mỗi item chiếm đều không gian trong tab bar
          justifyContent: "center", // Căn giữa theo chiều dọc
          alignItems: "center", // Căn giữa theo chiều ngang
          paddingTop: 23, // Thêm khoảng cách dưới nếu cần
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
                tintColor: focused ? "blue" : "#433878",
                marginBottom: 20,
              }}
            />
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
                tintColor: focused ? "blue" : "#433878",
                marginBottom: 20,
              }}
            />
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
                bottom: -25, // Đặt ở vị trí chính giữa của tab bar
                left: "50%",
                transform: [{ translateX: "-50%" }], // Đảm bảo nút nằm chính giữa
                zIndex: 999, // Đảm bảo SOS có chỉ số z cao hơn các tab khác
                width: 150, // Chiều rộng của nút
                height: 150, // Chiều cao của nút
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Ba lớp hình tròn */}
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "white", // Lớp ngoài cùng màu trắng
                  width: 100,
                  height: 100,
                  borderRadius: 100, // Để tạo hình tròn
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#A9C0FF", // Lớp bên trong màu xanh
                  width: 85,
                  height: 85,
                  borderRadius: 100, // Để tạo hình tròn
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 2,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#A590FB", // Lớp bên trong nữa màu vàng
                  width: 70,
                  height: 70,
                  borderRadius: 100, // Để tạo hình tròn
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 3,
                }}
              />
              {/* Hình ảnh SOS */}
              <Image
                source={sosImage} // Sử dụng hình ảnh chữ SOS
                style={{
                  width: 50, // Điều chỉnh kích thước của hình ảnh
                  height: 22,
                  zIndex: 4, // Đảm bảo hình ảnh SOS nằm trên cùng
                  tintColor: undefined, // Loại bỏ tintColor để không thay đổi màu sắc của ảnh
                }}
              />
            </TouchableOpacity>
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
                tintColor: focused ? "blue" : "#433878",
                marginBottom: 20,
              }}
            />
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
                tintColor: focused ? "blue" : "#433878",
                marginBottom: 20,
              }}
            />
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
