import React, { useState } from "react";
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
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Register = () => {
  const [circleColors, setCircleColors] = useState([
    "#8FE1D7",
    "#8FE1D7",
    "#8FE1D7",
    "#8FE1D7",
  ]);

  // Function to handle circle press in
  const handleCirclePressIn = (index) => {
    const newColors = [...circleColors];
    newColors[index] = "#5ED1C7"; // Darker color on press
    setCircleColors(newColors);
  };

  // Function to handle circle press out
  const handleCirclePressOut = (index) => {
    const newColors = [...circleColors];
    newColors[index] = "#8FE1D7"; // Reset color after press
    setCircleColors(newColors);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../assets/images/icon-v2.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={{ marginBottom: 30, marginTop: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Welcome to Katenai
          </Text>
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

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={["#6D5FB2", "#7E60BF"]}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>SIGN IN</Text>
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

        {/* Circle css */}
        <TouchableWithoutFeedback
          onPressIn={() => handleCirclePressIn(0)}
          onPressOut={() => handleCirclePressOut(0)}
        >
          <View
            style={[
              styles.circleTopLeft1,
              { backgroundColor: circleColors[0] },
            ]}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPressIn={() => handleCirclePressIn(1)}
          onPressOut={() => handleCirclePressOut(1)}
        >
          <View
            style={[
              styles.circleTopLeft2,
              { backgroundColor: circleColors[1] },
            ]}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPressIn={() => handleCirclePressIn(2)}
          onPressOut={() => handleCirclePressOut(2)}
        >
          <View
            style={[
              styles.circleBottomRight1,
              { backgroundColor: circleColors[2] },
            ]}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPressIn={() => handleCirclePressIn(3)}
          onPressOut={() => handleCirclePressOut(3)}
        >
          <View
            style={[
              styles.circleBottomRight2,
              { backgroundColor: circleColors[3] },
            ]}
          />
        </TouchableWithoutFeedback>
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
  logo: {
    marginLeft: 40,
    width: "50%",
    height: "30%",
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orText: {
    fontSize: 13,
    color: "#888",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  iconButton: {
    padding: 5,
    paddingHorizontal: 30,
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
  },
  circleTopLeft1: {
    position: "absolute",
    top: -100,
    left: 20,
    width: 200,
    height: 200,
    borderRadius: 500,
    opacity: 0.5,
  },
  circleTopLeft2: {
    position: "absolute",
    top: -30,
    left: -90,
    width: 220,
    height: 220,
    borderRadius: 500,
    opacity: 0.5,
  },
  circleBottomRight1: {
    position: "absolute",
    bottom: -150,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 500,
    opacity: 0.5,
  },
  circleBottomRight2: {
    position: "absolute",
    bottom: -60,
    right: -140,
    width: 220,
    height: 220,
    borderRadius: 500,
    opacity: 0.5,
  },
});

export default Register;
