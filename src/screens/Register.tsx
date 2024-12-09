import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Register = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      {/* Circle css */}
      <TouchableWithoutFeedback>
        <View style={[styles.circleTopLeft1]} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={[styles.circleTopLeft2]} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={[styles.circleBottomRight1]} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={[styles.circleBottomRight2]} />
      </TouchableWithoutFeedback>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Back Button*/}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require("../assets/images/backBtn.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.logoMini}
            resizeMode="contain"
          />
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Create your account
          </Text>
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: Nam Tran Hoang"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: nam.deptrai@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*********"
            secureTextEntry
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*********"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <LinearGradient
            colors={["#03CC4C", "#27F0AA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.orText}>or sign in with</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/images/facebookIcon.png")}
              style={{ width: 25 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/images/googleIcon.png")}
              style={{ width: 25 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/images/twitterIcon.png")}
              style={{ width: 25 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.orText}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#7160B5", marginLeft: 5 }}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 35,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 30,
  },
  inputField: {
    width: "100%",
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
    marginBottom: 10,
    backgroundColor: "#F0F0F0",
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
  orText: {
    fontSize: 13,
    color: "#888",
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
  backButton: {
    padding: 15,
    margin: -15,
    alignSelf: "flex-start",
  },
  logoMini: {
    position: "absolute",
    height: 25,
    width: 25,
    right: 0,
    top: 22,
  },
  circleTopLeft1: {
    position: "absolute",
    top: -100,
    left: 20,
    width: 200,
    height: 200,
    borderRadius: 500,
    opacity: 0.5,
    backgroundColor: "#8FE1D7",
  },
  circleTopLeft2: {
    position: "absolute",
    top: -30,
    left: -90,
    width: 220,
    height: 220,
    borderRadius: 500,
    opacity: 0.5,
    backgroundColor: "#8FE1D7",
  },
  circleBottomRight1: {
    position: "absolute",
    bottom: -150,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 500,
    opacity: 0.5,
    backgroundColor: "#8FE1D7",
  },
  circleBottomRight2: {
    position: "absolute",
    bottom: -60,
    right: -140,
    width: 220,
    height: 220,
    borderRadius: 500,
    opacity: 0.5,
    backgroundColor: "#8FE1D7",
  },
});

export default Register;
