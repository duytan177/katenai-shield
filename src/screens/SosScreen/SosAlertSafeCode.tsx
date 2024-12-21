import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import HeaderBody from "../../components/HeaderBody";
import sosImage from "../../assets/images/sos.png";
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { MainStackParamList } from "../../navigation/MainNavigator";
import sending from "../../assets/images/Sos/sending.png";
import SosNotiModal from "../../components/SosNotiModal";
import sendingSuccess from "../../assets/images/Sos/sendingSuccess.png";

const TITLE_SCREEN = "SOS";
const SosAlertSafeCode = ({ route }: any) => {
 
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title={TITLE_SCREEN} />
      <HeaderBody
        title={"SOS Alert"}
        subTitle="Contact with your friend to perform this operation"
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});

export default SosAlertSafeCode;
