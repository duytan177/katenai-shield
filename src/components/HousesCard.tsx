import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import avatar3 from "../assets/images/FakeCall/avatar3.png";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../navigation/MainNavigator";
import EventTimeCard from "./EventTimeCard";

const HousesCard = ({ name, avatar }: any) => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailHouse")}
      activeOpacity={0.7}
    >
      <LinearGradient
        start={{ x: 0.5, y: 2.2 }}
        end={{ x: 0.9, y: 1 }}
        colors={["#80CFB9", "#2591BF"]}
        style={styles.card}
      >
        <View style={styles.avatar}>
          <Image source={avatar} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.detail}>
            <Ionicons name="location-outline" color="#ffffff" size={20} />
            <Text style={{ color: "white", fontSize: 16 }}>1.2km away</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 35,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  avatar: {
    flex: 3,
  },
  image: {
    borderRadius: 100, // Đảm bảo ảnh có hình tròn
    height: 78,
    width: 78,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: "#fff",
    // Thêm bóng đổ cho ảnh
    shadowColor: "#000", // Màu sắc bóng đổ
    shadowOffset: { width: 0, height: 4 }, // Vị trí bóng đổ (đẩy xuống dưới)
    shadowOpacity: 0.1, // Độ mờ của bóng đổ
    shadowRadius: 6, // Độ mềm mại của bóng đổ
    elevation: 5, // Cách bóng đổ được hiển thị trên Android (tăng cường độ bóng)
  },
  content: {
    flex: 7,
    justifyContent: "space-around",
    marginVertical: 5,
  },
  icon: {
    height: 10,
    width: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  detail: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    marginLeft: -3,
  },
});
export default HousesCard;
