import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import katenai_text from "../assets/images/katenai_text.png";
import bell from "../assets/images/bell.png";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={katenai_text}
        style={{
          width: 100,
          height: 40,
        }}
      />
      <Image
        source={bell}
        style={{
          width: 30,
          height: 30,
        }}
      />
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
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Header;
