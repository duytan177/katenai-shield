import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import React from "react";

const SosNotiModal = ({ isModalVisible, closeModal, title, subTitle, imageTitle }: any) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={closeModal} // Đóng modal khi nhấn bên ngoài
      onBackButtonPress={closeModal} // Đóng modal khi nhấn nút quay lại
    >
      <View style={styles.modalContent}>
        <Image source={imageTitle} style={styles.sendingIcon} />
        <Text style={styles.modalMessage}>{title}</Text>
        <Text style={styles.modalMessage}>{subTitle}</Text>
        <TouchableOpacity onPress={closeModal} style={styles.button}>
          <Ionicons name="close" size={26} color="#000000" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default SosNotiModal;
