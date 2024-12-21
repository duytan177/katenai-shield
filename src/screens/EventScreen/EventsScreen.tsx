import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBody from "../../components/HeaderBody";
import { LinearGradient } from "expo-linear-gradient";
import avatar3 from "../../assets/images/FakeCall/avatar3.png";
import avatar2 from "../../assets/images/FakeCall/avatar2.png";
import avatar1 from "../../assets/images/FakeCall/avatar1.png";
import EventCard from "../../components/EventCard";

const events = [
  {
    name: "Richard Johnson",
    avatar: avatar3,
    dateTime: { date: "02 May 2025", time: "08:00 AM" },
  },
  {
    name: "Alice Smith",
    avatar: avatar2,
    dateTime: { date: "15 June 2025", time: "10:00 AM" },
  },
  {
    name: "Bob Brown",
    avatar: avatar1,
    dateTime: { date: "20 July 2024", time: "02:00 PM" },
    status: "Ended"
  },
  {
    name: "Richard Johnson",
    avatar: avatar3,
    dateTime: { date: "02 May 2025", time: "08:00 AM" },
  },
  {
    name: "Alice Smith",
    avatar: avatar2,
    dateTime: { date: "15 June 2025", time: "10:00 AM" },
  },
  {
    name: "Bob Brown",
    avatar: avatar1,
    dateTime: { date: "20 July 2024", time: "02:00 PM" },
    status: "Ended"
  }
];
const EventsScreen = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header title="Events" />
        <View style={styles.containerBody}>
          <HeaderBody
            title="Speakers' events"
            subTitle="Share information, and provide solutions related to"
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
          >
            {events.map((event, index) => (
              <EventCard
                key={index}
                name={event.name}
                avatar={event.avatar}
                dateTime={event.dateTime}
                status={event.status}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerLinerGrandient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

  containerBody: {
    flex: 1,
  },

  scrollContainer: {
    paddingHorizontal: 12,
    flex: 1,
  },
  card: {
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
});

export default EventsScreen;
