import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../navigation/MainNavigator";
import Header from "../components/Header";
import HeaderBody from "../components/HeaderBody";
import callIcon from "../assets/images/AnonymousCall/call.png";
import HomeScreen from "../screens/HomeScreen";
const TITLE_SCREEN = "Call";

const AnonymousCall = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleStartCall = () => {
    setModalVisible(true);
  };

  const handleRejectCall = () => {
    setModalVisible(false);
  };

  const handleAcceptCall = () => {
    setModalVisible(false);
    navigation.navigate("ActiveCall");
  };

  const handleHistory = () => {
    navigation.navigate("CallHistory");
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title={TITLE_SCREEN} onTitlePress={() => navigation.navigate("HomeScreen")} />
      <HeaderBody
        title="Anonymous Call"
        subTitle="A call with a stranger can improve your mood."
      />
      <View style={styles.body}>
        <Text style={styles.title}>BẠN SẼ CẢM THẤY TỐT HƠN</Text>
        <Text style={styles.subTitle}>
          Nhấn nút dưới để bắt đầu một cuộc gọi với một người nào đó
        </Text>
        <TouchableOpacity
          onPress={handleStartCall}
          style={styles.callButtonContainer}
        >
          <View style={styles.outerCircle} />
          <View style={styles.middleCircle} />
          <View style={styles.innerCircle}>
            <Image source={callIcon} style={styles.callIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHistory} style={styles.historyButton}>
          <View style={styles.historyButtonContent}>
            <Text style={styles.historyText}>History</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal thông báo cuộc gọi */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cuộc gọi người ẩn danh</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={handleAcceptCall}
                style={styles.acceptButton}
              >
                <Text style={styles.buttonText}>Gọi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleRejectCall}
                style={styles.rejectButton}
              >
                <Text style={styles.buttonText}>Từ chối</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  body: {
    flex: 0,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#333",
  },
  subTitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  callButtonContainer: {
    marginBottom: 150,
    marginVertical: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    position: "absolute",
    backgroundColor: "rgba(251, 231, 239, 1)",
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  middleCircle: {
    position: "absolute",
    backgroundColor: "rgba(239,207,227,1)",
    width: 260,
    height: 260,
    borderRadius: 130,
  },
  innerCircle: {
    position: "absolute",
    backgroundColor: "#B6E7FF",
    width: 220,
    height: 220,
    borderRadius: 110,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  callIcon: {
    width: 100,
    height: 100,
    borderRadius: 120,
  },
  historyButton: {
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 5,
  },
  historyButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  historyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
  },
  rejectButton: {
    flex: 1,
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AnonymousCall;
