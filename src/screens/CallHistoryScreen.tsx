import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const CallHistoryScreen = () => {
  const navigation = useNavigation(); // Sử dụng hook điều hướng

  const callHistory = [
    { id: "1", name: "Anonymous Call", duration: "1h37m", date: "26/10/2024" },
    { id: "2", name: "Anonymous Call", duration: "1h37m", date: "26/10/2024" },
    { id: "3", name: "Anonymous Call", duration: "1h37m", date: "26/10/2024" },
    { id: "4", name: "Anonymous Call", duration: "1h37m", date: "26/10/2024" },
    { id: "5", name: "Anonymous Call", duration: "1h37m", date: "26/10/2024" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.callItem}>
      <Image
        source={require("../assets/images/AnonymousCall/anonymous.png")}
        style={styles.callIcon}
      />
      <View style={styles.callDetails}>
        <Text style={styles.callName}>{item.name}</Text>
        <Text style={styles.callDate}>{item.date}</Text>
      </View>
      <Text style={styles.callDuration}>{item.duration}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>History Call</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={callHistory}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    backgroundColor: "#F4D5EC",
    padding: 15,
    justifyContent: "flex-start", // Canh trái tiêu đề
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  listContainer: {
    padding: 15,
  },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  callIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F4D5EC",
    alignItems: "center",
    justifyContent: "center",
  },
  callDetails: {
    flex: 1,
    marginLeft: 15,
  },
  callName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  callDate: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
  },
  callDuration: {
    fontSize: 14,
    color: "#666",
  },
});

export default CallHistoryScreen;
