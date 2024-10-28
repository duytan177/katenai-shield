import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"; // Thư viện cho icon
const { width, height } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {/* Logo */}
      <Image
        source={require("../assets/images/icon-v2.png")}
        style={styles.logo}
        resizeMode="contain" // hoặc "cover"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: nam.deptrai@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Trường nhập Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="*********" secureTextEntry />

      {/* Nút đăng nhập */}
      <TouchableOpacity style={styles.button}>
        <LinearGradient colors={["#6D5FB2", "#7E60BF"]} style={styles.gradient}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Hoặc đăng nhập với */}
      <Text style={styles.orText}>or sign in with</Text>

      {/* Các icon đăng nhập */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons name="google" size={30} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="twitter" size={30} color="#1DA1F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center",
    padding: 35,
  },
  logo: {
    marginLeft: 40,
    width: "50%",
    height: "35%",
    marginBottom: 20, 
  },
  label: {
    alignSelf: "flex-start", 
    marginBottom: 5, 
    fontSize: 14, 
    color: "#6F6F6F",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    color: "#433878",
    fontWeight: "500",
    height: 50,
    borderWidth: 0, 
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F0F0F0", // Không có khoảng trắng
},
  button: {
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  gradient: {
    height: 50, 
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    color: "#888",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  iconButton: {
    padding: 10,
    backgroundColor: "#F4F4F4",
  },
});

export default Login;
