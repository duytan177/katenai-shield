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
const SosMain = ({ route }: any) => {
  const modalSendingFlg = route.params?.modalSendingFlg; // Lấy tham số từ route
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const [isModalVisible, setModalVisible] = useState(modalSendingFlg); // Điều khiển trạng thái modal
  const [isModalVisibleSendLocal, setModalVisibleSendLocal] = useState(false); // Điều khiển trạng thái modal

  const onHandleSos = () => {
    navigation.navigate("SosSending");
  };

  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(modalSendingFlg);
    }, [])
  );
  const closeModal = () => {
    setModalVisible(false);
    setModalVisibleSendLocal(true);
  };

  const closeModalSendLocal = () => {
    setModalVisibleSendLocal(false);
    navigation.navigate("SosMapHelp");
  };
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title={TITLE_SCREEN} />
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
        <View style={styles.textContainer}>
          <Text style={styles.title}>Helpline phone number</Text>
          <Text style={styles.subTitle}>0795874652</Text>
          <Text style={styles.subTitle}>0988743531</Text>
        </View>
      </View>

      {!isModalVisibleSendLocal && (
        <SosNotiModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          title={"Please wait...."}
          subTitle={"We are trying to locate you...."}
          imageTitle={sending}
        />
      )}
      <SosNotiModal
        isModalVisible={isModalVisibleSendLocal}
        closeModal={closeModalSendLocal}
        title={"SOS ALERT"}
        subTitle={"Your location has been sent."}
        imageTitle={sendingSuccess}
      />
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
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: "#858585",
    fontWeight: "bold",
    marginBottom: 10,
  },

  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  sendingIcon: {
    height: 135,
    width: 135,
  },
  modalMessage: {
    fontSize: 16,
    color: "#1A2530",
    textAlign: "center",
  },
  button: {
    borderRadius: 5,
    position: "absolute",
    right: 0,
    margin: 10,
  },
});

export default SosMain;
