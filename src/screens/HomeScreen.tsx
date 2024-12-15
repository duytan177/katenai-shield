import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import speakerImg from "../assets/images/HomeView/speake-view.png";

const HomeScreen = () => {
  const handleViewDetails = () => {
    console.log("Navigating to details...");
  };

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.cardContainer}>
        <LinearGradient
          start={{ x: 0.5, y: 2.2 }}
          end={{ x: 0.9, y: 1 }}
          colors={["#88B8CC", "#445C66"]}
          style={styles.cardSpeaker}
        >
          <View style={styles.container}>
            <View style={styles.ovalBackground}></View>
            <Image source={speakerImg} style={styles.speakerImage} />
            <View style={styles.textContainer}>
              <Text style={styles.textFirst}>
                Có một sự kiện của một diễn giả có thể bạn quan tâm
              </Text>
              <TouchableOpacity
                onPress={handleViewDetails}
                style={styles.button}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>View detail</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textPrevious}>
                  Look back at previous events.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
  },
  cardSpeaker: {
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "100%",
    height: 155,
    position: "relative",
  },
  ovalBackground: {
    position: "absolute",
    bottom: -20,
    left: 20,
    height: "100%",
    width: 95,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    zIndex: -1,
  },
  speakerImage: {
    height: "92%",
    width: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginRight: -20,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    marginRight: 15,
    justifyContent: "center",
    minHeight: "90%",
  },
  textFirst: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  textPrevious: {
    color: "white",
    fontWeight: "300",
    textDecorationLine: "underline",
    fontSize: 12,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#445C66",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default HomeScreen;
