import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import chat from "../../assets/images/Safetips/chat.png"; // Make sure the image path is correct

const SafeTipsMain = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header title="Safe Tips" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.containerBody}>
            <View style={styles.des}>
              <Text style={styles.textFirst}>
                Welcome to the Violence Prevention Support Chatbot! 🌟
              </Text>
              <Text style={styles.textDetail}>
                We are here to provide safety tips and useful information to
                help you protect yourself and increase safety in your daily life
              </Text>
            </View>
            <Image source={chat} style={styles.chatImage} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerLinerGrandient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  containerBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  des: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  textFirst: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  textDetail: {
    fontWeight: "400",
    textAlign: "center",
  },
  chatImage: {
    width: "100%",
    height: 1100,
    resizeMode: "contain",
    paddingBottom: 60,
  },
});

export default SafeTipsMain;
