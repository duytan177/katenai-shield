import { StyleSheet, View, Text, Pressable, Image } from "react-native";
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
            <Image source={speakerImg} style={styles.speakerImage} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Homescreen</Text>
              <Pressable onPress={handleViewDetails}>
                <Text style={styles.text}>View detail</Text>
              </Pressable>
              <Text style={styles.text}>Look back at previous events.</Text>
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
    borderRadius: 10,
    justifyContent: "center", 
    alignItems: "center",
    // padding: 10,
  },
  container: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  speakerImage: {
    width: 100, 
    height: 100, // Adjust based on the desired size
    resizeMode: "contain",
    marginRight: 10, // Space between image and text
  },
  textContainer: {
    flex: 1, // Ensure text container takes up the remaining space
  },
  text: {
    color: "white", // Set text color to white
    marginBottom: 5, // Add some spacing between text elements
  },
});

export default HomeScreen;
