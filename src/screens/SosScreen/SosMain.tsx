import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import HeaderBody from "../../components/HeaderBody";
import sosImage from "../../assets/images/sos.png";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../../navigation/MainNavigator";

const TITLE_SCREEN = "SOS";
const SosMain = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const onHandleSos = () => {
    navigation.navigate("SosSending")
  }
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title={TITLE_SCREEN}/>
      <HeaderBody
        title={TITLE_SCREEN}
        subTitle="Share live location with your friend"
      />
      <View style={styles.bodySos}>
        <Text style={styles.title}>ARE YOU IN TROUBLE?</Text>
        <Text style={styles.subTitle}>Click this button to call for help</Text>

        <TouchableOpacity
        onPress={onHandleSos}
          style={{
            marginVertical: 140,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "rgba(237,76,92,0.05)",
              width: 300,
              height: 300,
              borderRadius: "100%",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: "rgba(237,76,92,0.12)",
              opacity: 12,
              width: 260,
              height: 260,
              borderRadius: "100%",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: "#ED4C5C",
              width: 220,
              height: 220,
              borderRadius: "100%",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
            }}
          />
          <Image
            source={sosImage}
            style={{
              width: 50,
              height: 22,
              zIndex: 4,
              tintColor: undefined,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Helpline phone number</Text>
        <Text style={styles.subTitle}>0795874652</Text>
        <Text style={styles.subTitle}>0988743531</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodySos: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  subTitle: {
    fontSize: 18,
    color: "#858585",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default SosMain;
