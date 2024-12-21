import { StyleSheet, View, Text} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const EventTimeCard = ({ dateTime }: any) => {
  return (
    <View style={styles.time}>
      <Ionicons name="calendar-outline" color="#ffffff" size={20} />
      <View style={styles.textContainer}>
        <Text style={styles.textTop}>{dateTime.date}</Text>
        <Text style={styles.textBottom}>{dateTime.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 5,
  },
  textTop: {
    fontSize: 12,
    color: "#ffffff",
    // textShadowColor: "#616161",
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 3,
    fontWeight: "600",
  },
  textBottom: {
    fontSize: 12,
    color: "#ffffff",
  },
});

export default EventTimeCard;
