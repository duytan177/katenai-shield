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
            <TouchableOpacity>
              <LinearGradient
                colors={["#356F9E", "#202754"]}
                style={styles.actionButton}
              >
                <Text style={styles.actionButtonText}>
                  Giúp đỡ người khác bằng ngồi nhà thân yêu của bạn
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity>
              <LinearGradient
                colors={["#FDB145", "#FD9202"]}
                style={styles.actionButton}
              >
                <Text style={styles.actionButtonText}>Tìm sự giúp đỡ</Text>
              </LinearGradient>
            </TouchableOpacity>
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
    flexGrow: 1,
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
    maxWidth: "95%",
    marginBottom: 20,
  },
  triangle: {
    position: "absolute",
    top: -20,
    left: "51%",
    marginLeft: -20,
    width: 0,
    height: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FFFFFF",
  },
  speechBubble: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 14,
    elevation: 4,
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
    height: 70,
    alignSelf: "center",
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center", // Đảm bảo chữ luôn căn giữa
  },
});

export default HouseOfCompassionMain;
