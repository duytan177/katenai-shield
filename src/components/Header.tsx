import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center", // Đảm bảo nội dung được căn giữa theo cả hai chiều
    backgroundColor: "#f8f9fa", // Màu nền tùy chọn
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Màu chữ tùy chọn
  },
});

export default Header;
