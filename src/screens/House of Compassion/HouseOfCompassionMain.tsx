import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView, // Import ScrollView
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import hscImg from "../../assets/images/HouseOfCompassion/houseofcompassion.png";
import { Ionicons } from "@expo/vector-icons";

const HouseOfCompassionMain = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header />
        {/* Wrap everything in ScrollView */}
        <HeaderBody title="House of Compassion" subTitle="A home for all" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.containerBody}>
            <View>
              <Image
                source={hscImg}
                style={styles.image}
                resizeMode="contain"
              />
              <TouchableOpacity style={[styles.arrowButton, styles.leftButton]}>
                <Ionicons name="arrow-back" size={30} color="#FFE1FF" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.arrowButton, styles.rightButton]}
              >
                <Ionicons name="arrow-forward" size={30} color="#FFE1FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.speechBubbleContainer}>
              <View style={styles.triangle}></View>
              <View style={styles.speechBubble}>
                <Text style={styles.speechBubbleText}>
                  "Ngôi nhà tình thương là nơi trú ẩn an toàn, hỗ trợ những
                  người bị ảnh hưởng bởi bạo lực gia đình. Đây không chỉ là
                  không gian vật lý mà còn là môi trường nuôi dưỡng, nơi mỗi cá
                  nhân được lắng nghe, tôn trọng và chữa lành."
                </Text>
              </View>
            </View>
            <LinearGradient
              colors={["#356F9E", "#202754"]} // Đặt màu gradient từ FDB145 đến FD9202
              style={styles.actionButton} // Áp dụng style cho nút
            >
              <TouchableOpacity>
                <Text style={styles.actionButtonText}>
                  Giúp đỡ người khác bằng ngồi nhà thân yêu của bạn
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={["#FDB145", "#FD9202"]} // Đặt màu gradient từ FDB145 đến FD9202
              style={styles.actionButton} // Áp dụng style cho nút
            >
              <TouchableOpacity>
                <Text style={styles.actionButtonText}>Tìm sự giúp đỡ</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
        {/* End of ScrollView */}
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
    flex: 1,
  },
  image: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
  },
  arrowButton: {
    position: "absolute",
    bottom: "15%",
    transform: [{ translateY: -15 }],
    backgroundColor: "#FF4C4C",
    padding: 8,
    borderRadius: 50,
    zIndex: 1,
  },
  leftButton: {
    left: 6,
  },
  rightButton: {
    right: 0,
  },

  // Ngôi nhà tình thương
  speechBubbleContainer: {
    marginTop: -20,
    position: "relative",
    alignItems: "center",
    paddingHorizontal: 20,
    maxWidth: "95%", // Giới hạn chiều rộng để không bị lệch
    marginBottom: 20,
  },
  triangle: {
    position: "absolute",
    top: -20, // Dịch tam giác lên chút để nó sát vào bubble (có thể điều chỉnh thêm)
    left: "51%", // Đặt tam giác vào giữa
    marginLeft: -20, // Dịch chuyển sang trái một chút để căn giữa chính xác
    width: 0,
    height: 0,
    // Cấu hình bóng cho tam giác
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderLeftWidth: 20, // Tăng kích thước của cạnh trái
    borderRightWidth: 20, // Tăng kích thước của cạnh phải
    borderBottomWidth: 20, // Tăng kích thước của cạnh đáy
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FFFFFF", // Màu nền của speech bubble
  },
  speechBubble: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 14, // Tăng padding để có không gian trong speech bubble
    elevation: 4, // Hiệu ứng bóng cho speech bubble
    maxWidth: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  speechBubbleText: {
    fontSize: 13,
    color: "#333333",
    textAlign: "justify",
    lineHeight: 18,
  },

  // Button
  actionButton: {
    marginBottom: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 285, 
    alignSelf: "center",
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HouseOfCompassionMain;
