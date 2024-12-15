import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import eventDetail from "../../assets/images/Events/eventDetail.png";
import avatar3 from "../../assets/images/FakeCall/avatar3.png";
import { ScrollView } from "react-native-gesture-handler";
import polygon from "../../assets/images/Events/polygon.png";
import { Ionicons } from "@expo/vector-icons";
import EventTimeCard from "../../components/EventTimeCard";
import { LinearGradient } from "expo-linear-gradient";
const EventDetailScreen = ({ route }: any) => {
  const { name, avatar, dateTime } = route.params; // Lấy tham số từ route

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title="Event Details" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Image source={eventDetail} style={styles.banner} />
        <View style={styles.inforBasic}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>
            Pain Does Not Define Who You Are – Step Out of the Darkness.
          </Text>
        </View>
        <View style={styles.inforDetail}>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.profileDetail}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>

          <Text style={styles.seminars}>Speeches and seminars attended</Text>
          <Text style={styles.seminarsDetail}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
        </View>
        <View style={styles.inforBasicFooter}>
          <Image source={polygon} style={styles.polygon} />
          <Text style={styles.joins}>Join us</Text>

          <EventTimeCard dateTime={dateTime} />
          <View style={styles.cardContainer}>
            <LinearGradient colors={["#3E5F81", "#2796F0"]} style={styles.card}>
              <Text style={styles.form}>Offline</Text>
              <Text style={styles.link}>105 Tran Dai Nghia</Text>
            </LinearGradient>
            <LinearGradient colors={["#3E5F81", "#2796F0"]} style={styles.card}>
              <Text style={styles.form}>Offline</Text>
              <Text style={styles.link}>google.meet.com</Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 197,
    width: "100%",
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#2C3E50",
  },
  avatar: {
    borderRadius: "100%",
    height: 122,
    width: 122,
    marginBottom: 20,
  },
  inforBasic: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 50,
  },
  name: {
    fontSize: 30,
    color: "#FFFFFF",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontWeight: "bold",

    borderBottomWidth: 1, // Độ dày của viền
    borderColor: "#FFFFFF", // Màu sắc của viền
    textAlign: "center",
    paddingHorizontal: 16, // Khoảng cách ngang giữa viền và text
    borderRadius: 8, // Bo góc cho viền

    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    color: "#FFFFFF",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 12,
    textAlign: "center",
  },

  inforDetail: {
    padding: 20,
  },
  profile: {
    fontSize: 24,
    color: "#FFFFFF",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontWeight: "bold",
    borderBottomWidth: 1, // Độ dày của viền
    borderColor: "#FFFFFF", // Màu sắc của viền
    paddingHorizontal: 2, // Khoảng cách ngang giữa viền và text
    borderRadius: 8, // Bo góc cho viền
    paddingVertical: 2,
    alignSelf: "flex-start",

    marginBottom: 10,
  },

  profileDetail: {
    fontSize: 14,
    color: "#FFFFFF",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 12,
    paddingHorizontal: 3,
    lineHeight: 18

  },
  seminars: {
    fontSize: 24,
    color: "#FFFFFF",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontWeight: "bold",
    borderBottomWidth: 1, // Độ dày của viền
    borderColor: "#FFFFFF", // Màu sắc của viền
    paddingHorizontal: 2, // Khoảng cách ngang giữa viền và text
    
    borderRadius: 8, // Bo góc cho viền
    paddingVertical: 2,
    alignSelf: "flex-start",

    marginBottom: 10,
  },

  seminarsDetail: {
    fontSize: 14,
    color: "#FFFFFF",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 12,
    paddingHorizontal: 3,
    lineHeight: 18
  },

  inforBasicFooter: {
    alignItems: "center",
    justifyContent: "space-around",
    // paddingHorizontal: 50,
    paddingTop: 5,
    paddingBottom: 20,
  },

  polygon: {
    height: 35,
    width: 35,
    marginBottom: 10,
  },

  joins: {
    fontSize: 18,
    color: "#FFFFFF",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontWeight: "bold",

    marginBottom: 12,
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
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    flexDirection: "column",
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
    alignItems: "center",
  },

  form: {
    fontSize: 16,
    color: "#ffffff",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontWeight: "bold",
    marginBottom: 12,
  },

  link: {
    fontSize: 12,
    color: "#ffffff",
    textShadowColor: "#616161",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default EventDetailScreen;
