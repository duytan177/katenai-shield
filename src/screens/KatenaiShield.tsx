import React, { useEffect } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MainNavigator, { MainStackParamList } from '../navigation/MainNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type LoginScreenNavigationProp = NativeStackNavigationProp<MainStackParamList, 'HomeScreen'>;


export default function KatenaiShield() {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [isLogin, setIsLogin] = useState<Boolean>(false);
    const getTokenStorage = async ()  => {
        try {
            const isLogin = await AsyncStorage.getItem('isLogin');
            console.log(isLogin)
            return isLogin;
        } catch (e) {
            console.error('Failed to retrieve token.');
            return null;
        }
    };

    useEffect(() => {
        const checkLoginStatus = async () => {
          const token = await getTokenStorage(); 
          if(token){
            setIsLogin(true)
          }else{
            setIsLogin(false)
          }
        };
        checkLoginStatus(); 

        if(isLogin){
            navigation.navigate("LoginScreen")
        }
    }, [isLogin]);
  return (
    <MainNavigator/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarContainer: {
    backgroundColor: "#fff", // Màu nền của thanh tab
    height: 50, // Chiều cao của thanh tab
    shadowColor: "#000", // Màu của bóng
    shadowOffset: { width: 0, height: 2 }, // Độ dịch chuyển của bóng
    shadowOpacity: 0.25, // Độ mờ của bóng
    shadowRadius: 3.84, // Bán kính của bóng
    elevation: 5, // Chỉ định bóng cho Android
  },
});
