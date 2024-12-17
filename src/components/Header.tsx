import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import katenai_text from "../assets/images/katenai_text.png";
import bell from "../assets/images/bell.png";
import back from "../assets/images/back.png";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Header = ({ title = null }: any) => {
  const [scaleKatenai] = useState(new Animated.Value(1));
  const [scaleBell] = useState(new Animated.Value(1));

  const navigation = useNavigation();

  const handleKatenaiPressIn = () => {
    Animated.spring(scaleKatenai, {
      toValue: 1.1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleKatenaiPressOut = () => {
    Animated.spring(scaleKatenai, {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleKatenaiPress = () => {
    navigation.navigate("HomeTabs", { screen: "Home" });
  };

  const handleBellPressIn = () => {
    Animated.spring(scaleBell, {
      toValue: 1.1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleBellPressOut = () => {
    Animated.spring(scaleBell, {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPressIn={handleKatenaiPressIn}
        onPressOut={handleKatenaiPressOut}
        onPress={handleKatenaiPress} // Thêm sự kiện nhấn vào logo để điều hướng
        activeOpacity={0.7}
      >
        <Animated.Image
          source={katenai_text}
          style={{
            width: 100,
            height: 40,
            transform: [{ scale: scaleKatenai }],
          }}
        />
      </TouchableOpacity>

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
            transform: [{ scale: scaleBell }],
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
