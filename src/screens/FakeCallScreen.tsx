import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import HeaderBody from "../components/HeaderBody";
import FakeCallCard from "../components/FakeCallCard";
import vector from "../assets/images/FakeCall/Vector.png";

const TITLE_SCREEN = "Fake Call";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const FakeCallScreen = () => {
  const timeoutRef = useRef<number | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("incoming-calls", {
        name: "Incoming Calls",
        importance: Notifications.AndroidImportance.HIGH,
        sound: null,
      });
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const onCallFake = (
    phoneNumber: string,
    name: string,
    avatar: string,
    time: number
  ) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: `Cuộc gọi đến từ ${name}`,
        body: `Số điện thoại: ${phoneNumber}`,
        data: { phoneNumber, name, avatar },
      },
      trigger: null,
    });

    setTimeout(() => {
      navigation.navigate("CallScreen", {
        phoneNumber,
        name,
        avatar,
      });
    }, time * 1000);
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header title={TITLE_SCREEN} />
        <View style={styles.containerBody}>
          <HeaderBody
            title={TITLE_SCREEN}
            subTitle="Simulate a fake incoming call for fun!"
            iconButtonRight={vector}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
          >
            <FakeCallCard
              name="Duy Tan"
              avatar="avatar1"
              phoneNumber="0795794821"
              timeCall={5}
              onCallFake={onCallFake}
            />
            <FakeCallCard
              name="Hoang Nam"
              avatar="avatar2"
              phoneNumber="0795793579"
              timeCall={10}
              onCallFake={onCallFake}
            />
            <FakeCallCard
              name="Anh Tai"
              avatar="avatar3"
              phoneNumber="0915202294"
              timeCall={20}
              onCallFake={onCallFake}
            />
            <FakeCallCard
              name="Minh Nhat"
              avatar="avatar2"
              phoneNumber="0954214242"
              timeCall={30}
              onCallFake={onCallFake}
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
  scrollContainer: {
    paddingHorizontal: 12,
    flex: 1,
  },
});

export default FakeCallScreen;
