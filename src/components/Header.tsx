import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Animated } from "react-native";
import katenai_text from "../assets/images/katenai_text.png";
import bell from "../assets/images/bell.png";

const Header = ({title= null}: any) => {
  const [scaleKatenai] = useState(new Animated.Value(1)); 
  const [scaleBell] = useState(new Animated.Value(1)); 

  // Hàm xử lý khi nhấn vào hình ảnh Katenai
  const handleKatenaiPressIn = () => {
    Animated.spring(scaleKatenai, {
      toValue: 1.1, // Phóng to lên 1.1 lần
      friction: 3, // Độ ma sát, ảnh hưởng đến độ mượt của animation
      tension: 100, // Độ căng của animation
      useNativeDriver: true, // Dùng driver gốc để tối ưu hiệu suất
    }).start();
  };

  const handleKatenaiPressOut = () => {
    Animated.spring(scaleKatenai, {
      toValue: 1, // Thu lại kích thước gốc
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  // Hàm xử lý khi nhấn vào hình ảnh Bell
  const handleBellPressIn = () => {
    Animated.spring(scaleBell, {
      toValue: 1.1, // Phóng to lên 1.1 lần
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleBellPressOut = () => {
    Animated.spring(scaleBell, {
      toValue: 1, // Thu lại kích thước gốc
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.header}>
      {/* TouchableOpacity cho hình ảnh Katenai */}
      <TouchableOpacity
        onPressIn={handleKatenaiPressIn}
        onPressOut={handleKatenaiPressOut}
        activeOpacity={0.7}
      >
        <Animated.Image
          source={katenai_text}
          style={{
            width: 100,
            height: 40,
            transform: [{ scale: scaleKatenai }], // Áp dụng animation scale
          }}
        />
      </TouchableOpacity>

      {/* TouchableOpacity cho hình ảnh Bell */}
      <TouchableOpacity
        onPressIn={handleBellPressIn}
        onPressOut={handleBellPressOut}
        activeOpacity={0.7}
      >
        <Animated.Image
          source={bell}
          style={{
            width: 27,
            height: 30,
            transform: [{ scale: scaleBell }], // Áp dụng animation scale
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-between", // Đảm bảo có khoảng cách giữa các phần tử
    alignItems: "center",
    backgroundColor: "#FFE1FF",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBlockColor: "#7E60BF",
  },
});

export default Header;
