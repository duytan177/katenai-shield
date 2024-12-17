import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../navigation/MainNavigator";

const UserCard = ({ name, avatar, des }: any) => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  
  // Hàm xử lý khi nhấn vào icon 3 dấu chấm
  const handleOptionsPress = () => {
    // Logic để hiển thị các tùy chọn, có thể là một modal hoặc một action nào đó
    console.log("Options pressed");
  };

  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
      <View style={styles.card}>
        {/* Avatar nằm bên trái */}
        <View style={styles.avatar}>
          <Image source={avatar} style={styles.image} />
        </View>

        {/* Nội dung: Name ở trên, Des ở dưới, và nút 3 chấm bên phải */}
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.des}>{des}</Text>
        </View>

        {/* Biểu tượng 3 dấu chấm để mở tùy chọn */}
        <TouchableOpacity onPress={handleOptionsPress} style={styles.options}>
          <Ionicons name="ellipsis-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",  // Đảm bảo nội dung căn giữa
  },
  avatar: {
    flex: 1,
  },
  image: {
    borderRadius: 50, // Sửa lại để đảm bảo avatar tròn
    height: 78,
    width: 78,
  },
  content: {
    flex: 2, // Nội dung chiếm phần còn lại
    justifyContent: "center",
    marginLeft: 15, // Giãn cách giữa avatar và nội dung
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    color: "#141619",
  },
  des: {
    fontSize: 14,
    color: "#777",
  },
  options: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserCard;
