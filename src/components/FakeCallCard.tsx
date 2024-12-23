import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const avatarMap: { [key: string]: any } = {
  avatar1: require("../assets/images/FakeCall/avatar1.png"),
  avatar2: require("../assets/images/FakeCall/avatar2.png"),
  avatar3: require("../assets/images/FakeCall/avatar3.png"),
  avatar4: require("../assets/images/FakeCall/avatar2.png"),
};

const FakeCallCard = ({ name, avatar, phoneNumber, timeCall, onCallFake }: any) => {
  const onHandleCallFake = (phoneNumber: string, time: number) => {
    onCallFake(phoneNumber, name, avatar, time);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftSection}>
        <View style={styles.leftSectionContent}>
          <View style={styles.nameContainer}>
            <Text style={styles.caller}>Caller detail</Text>
          </View>
          <Image source={avatarMap[avatar]} style={styles.image} />
        </View>
        <View style={styles.contentDetail}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.numberPhone}>{phoneNumber}</Text>
          <Text style={styles.detail}>
            After <Text style={styles.boldText}>{timeCall}</Text> seconds the call will be made.
          </Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Pressable onPress={() => onHandleCallFake(phoneNumber, timeCall)}>
          <Image
            source={require("../assets/images/FakeCall/Call.png")}
            style={styles.buttonCall}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  leftSection: {
    flex: 0.7,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSectionContent: {
    flexDirection: "column",
    marginBottom: 10,
  },
  nameContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  caller: {
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Sửa thành số để tạo hình tròn
  },
  contentDetail: {
    flex: 1,
    marginLeft: 5,
    marginTop: 15,
  },
  name: {
    fontWeight: "bold",
  },
  numberPhone: {},
  detail: {},
  rightSection: {
    flex: 0.3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center", // Center the button
  },
  buttonCall: {
    width: 90,
    height: 90,
    borderRadius: 45, // Sửa thành số để tạo hình tròn
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default FakeCallCard;
