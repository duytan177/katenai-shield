import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import avatar3 from "../assets/images/FakeCall/avatar3.png";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../navigation/MainNavigator";
import EventTimeCard from "./EventTimeCard";

const EventCard = ({ name, avatar, dateTime, status }: any) => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("EventDetailScreen", {
          name: name,
          avatar: avatar,
          dateTime: dateTime,
        });
      }}
      activeOpacity={0.7}
    >
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
            <EventTimeCard dateTime={dateTime} />
            {status == "Ended" ? (
              <Text style={styles.textEnded}>{status}</Text>
            ) : (
              <View style={styles.status}>
                <Text style={styles.text}>Coming soon</Text>
              </View>
            )}
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
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
    color: "#f75252", // Màu chữ cho Coming soon
  },
});

export default EventCard;
