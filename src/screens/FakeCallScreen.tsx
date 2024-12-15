import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  // PermissionsAndroid,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import FakeCallCard from "../components/FakeCallCard";
import HeaderBody from "../components/HeaderBody";
// import RNCallKeep from "react-native-callkeep";
import { v4 as uuidv4 } from 'uuid';
import vector from "../assets/images/FakeCall/Vector.png"
const TITLE_SCREEN = "Fake Call";

const FakeCallScreen = () => {
  const setupCallKeep = async () => {
    // const options = {
    //   ios: {
    //     appName: "Fake Call App",
    //   },
    //   android: {
    //     alertTitle: "Permissions required",
    //     alertDescription:
    //       "This app requires phone permissions to simulate calls",
    //     cancelButton: "Cancel",
    //     okButton: "OK",
    //     imageName: "phone_account_icon",
    //     additionalPermissions: [
    //       PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
    //       PermissionsAndroid.PERMISSIONS.CALL_PHONE,
    //     ],
    //     foregroundService: {
    //       channelId: "com.fakecallapp",
    //       channelName: "Fake Call Service",
    //       notificationTitle: "Fake Call Running",
    //       notificationIcon: "ic_launcher", // Replace with your app's resource icon name
    //     },
    //   },
    // };

    // try {
    //   await RNCallKeep.setup(options);
    // } catch (err) {
    //   console.error("CallKeep setup error:", err);
    // }
  };

  const onCallFake = async (phoneNumber: string, name: string, avatar: string, time: number,) => {
    console.log(111111111111111111111)
    await setupCallKeep();
    setTimeout(() => {
      // RNCallKeep.displayIncomingCall(
      //   uuidv4(), // Unique call UUID
      //   phoneNumber, // Phone number to display
      //   name, // Caller name
      //   "generic", // Call type
      //   false // Indicate this is a video call (true or false)
      // );  
    }, time* 1000);
  };

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
          <HeaderBody title={TITLE_SCREEN} subTitle="Share live location with your friend" iconButtonRight={vector}  />

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
          >
            <FakeCallCard
              name="Duy Tan"
              avatar="avatar1"
              phoneNumber="0795794821"
              timeCall="5 seconds"
              onCallFake={onCallFake}
            />
            <FakeCallCard
              name="Hoang Nam"
              avatar="avatar2"
              phoneNumber="0795793579"
              timeCall="60 seconds"
              onCallFake={onCallFake}
            />
            <FakeCallCard
              name="Anh Tai"
              avatar="avatar3"
              phoneNumber="0999999999"
              timeCall="20 seconds"
              onCallFake={onCallFake}
            />
            <FakeCallCard
              name="Minh Nhat"
              avatar="avatar2"
              phoneNumber="0888888888"
              timeCall="30 seconds"
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
