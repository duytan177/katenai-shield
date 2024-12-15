import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import avatar3 from "../assets/images/FakeCall/avatar3.png";
import { Ionicons } from "@expo/vector-icons";

const EventCard = ({ name, avatar, dateTime, status }: any) => {
  return (
    <LinearGradient
      start={{ x: 0.5, y: 2.2 }}
      end={{ x: 0.9, y: 1 }}
      colors={["#88B8CC", "#445C66"]}
      style={styles.card}
    >
      <View style={styles.avatar}>
        <Image source={avatar} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.detail}>
          <View style={styles.time}>
            <Ionicons name="calendar-outline" color="#ffffff" size={20} />
            <View style={styles.textContainer}>
              <Text style={styles.textTop}>{dateTime.date}</Text>
              <Text style={styles.textBottom}>{dateTime.time}</Text>
            </View>
          </View>
          {status == "ended" ? (
              <Text style={styles.textEnded}>{status}</Text>
          ) : (
            <View style={styles.status}>
              <Text style={styles.text}>Coming soon</Text>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  avatar: {
    flex: 3,
  },
  image: {
    borderRadius: "100%",
    height: 78,
    width: 78,
    marginRight: 10,
    marginVertical: 5,
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
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 5,
  },
  textTop: {
    fontSize: 13,
    color: "#ffffff",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontWeight: "bold",
  },
  textBottom: {
    fontSize: 12,
    color: "#ffffff",
  },

  status: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 15,
    color: "#12F212", // Màu chữ cho Coming soon
  },

  textEnded: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 15,
    color: "#F22D2D", // Màu chữ cho Coming soon
  },
});

export default EventCard;
