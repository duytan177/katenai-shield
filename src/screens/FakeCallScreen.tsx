import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import FakeCallCard from "../components/FakeCallCard";

const TITLE_SCREEN = "Fake Call";

const FakeCallScreen = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView style={styles.container}>
        <Header title={TITLE_SCREEN} />
        <View style={styles.containerBody}>
          <View style={styles.headerBody}>
            <View style={styles.topLeft}>
              <Text style={styles.title}>{TITLE_SCREEN}</Text>
              <Text style={styles.subtitle}>
                Share live location with your friend
              </Text>
            </View>
            <View style={styles.topRight}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  console.log(11111111111);
                }}
              >
                <Image
                  source={require("../assets/images/FakeCall/Vector.png")}
                  style={styles.buttonImage}
                />
              </Pressable>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
            <FakeCallCard
              name="Duy Tan"
              phoneNumber="0795794821"
              timeCall="5 seconds"
            />
            <FakeCallCard
              name="Hoang Nam"
              phoneNumber="0795793579"
              timeCall="60 seconds"
            />
            <FakeCallCard
              name="Anh Tai"
              phoneNumber="0999999999"
              timeCall="20 seconds"
            />
            <FakeCallCard
              name="Minh Nhat"
              phoneNumber="0888888888"
              timeCall="30 seconds"
            />
          </ScrollView>
        </View>
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
  },

  headerBody: {
    flex: 0.2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },

  topLeft: {
    flex: 0.8,
  },
  topRight: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 16,
    color: "#000000",
    marginVertical: 12,
    maxWidth: "80%",
  },
  button: {
    backgroundColor: "#433878",
    width: 80,
    height: 80,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonImage: {
    width: 45,
    height: 45,
  },

  scrollContainer: {
    paddingHorizontal: 12,
    flex: 1,
  },
});

export default FakeCallScreen;
