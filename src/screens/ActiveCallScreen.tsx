import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ActiveCallScreen = () => {
  const navigation = useNavigation();

  const handleEndCall = () => {
    navigation.navigate("AnonymousCall"); // Chuyển về màn hình AnonymousCall
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.callText}>Đang gọi...</Text>
      <Image
        source={require("../assets/images/AnonymousCall/profile.png")} // Cập nhật ảnh phù hợp
        style={styles.profileImage}
      />
      <Text style={styles.callerName}>Anonymous</Text>
      <Text style={styles.callerInfo}>Mobile</Text>
      <TouchableOpacity onPress={handleEndCall} style={styles.endCallButton}>
        <Text style={styles.endCallText}>Kết thúc</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  callText: {
    fontSize: 20,
    color: "#333",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  callerName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  callerInfo: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  endCallButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  endCallText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ActiveCallScreen;
