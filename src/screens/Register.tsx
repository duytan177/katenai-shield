import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require("../assets/images/backBtn.png")} resizeMode="contain" />
          </TouchableOpacity>
          <Image source={require("../assets/images/icon.png")} style={styles.logoMini} resizeMode="contain" />
        </View>

        <Text style={styles.title}>Create your account</Text>

        <InputField label="Name" placeholder="ex: Nam Tran Hoang" keyboardType="default" />
        <InputField label="Email" placeholder="ex: nam.deptrai@email.com" keyboardType="email-address" />
        <InputField label="Password" placeholder="*********" secureTextEntry />
        <InputField label="Confirm Password" placeholder="*********" secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
          <LinearGradient colors={["#03CC4C", "#27F0AA"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign in with</Text>

        <View style={styles.iconContainer}>
          {["facebookIcon", "googleIcon", "twitterIcon"].map((icon) => (
            <TouchableOpacity key={icon} style={styles.iconButton}>
              <Image source={require(`../assets/images/${icon}.png`)} style={styles.icon} resizeMode="contain" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.orText}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signInText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const InputField = ({ label, placeholder, keyboardType = "default", secureTextEntry = false }) => (
  <View style={styles.inputField}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputField: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: "#6F6F6F",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: "#F0F0F0",
    color: "#433878",
    fontWeight: "500",
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
    fontSize: 13,
    color: "#888",
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 25,
  },
  iconButton: {
    padding: 5,
    paddingHorizontal: 30,
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInText: {
    color: "#7160B5",
    marginLeft: 5,
  },
  backButton: {
    padding: 15,
  },
  logoMini: {
    position: "absolute",
    height: 25,
    width: 25,
    right: 0,
    top: 22,
  },
});

export default Login;
