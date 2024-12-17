import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import upload from "../../assets/images/HouseOfCompassion/upload.png";

const CreateHouse = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header title="Create house" />
        <HeaderBody
          title="House of Compassion"
          subTitle="Creating housing for everyone"
        />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.containerBody}>
            <View style={styles.containerImg}>
              <Image source={upload} style={styles.image} resizeMode="cover" />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputField}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type your house address."
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputField}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type your description."
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputField}>
                <Text style={styles.label}>Phone</Text>
                <TextInput
                  style={styles.input}
                  placeholder="*********"
                />
              </View>
            </View>
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
    padding: 30,
  },
  containerImg: {
    width: "90%",
    height: 300,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    padding: 20,
  },
  formContainer: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
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
    backgroundColor: "#FAFAFA",
  },
});

export default CreateHouse;
