import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView, // Import ScrollView
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import img1 from "../../assets/images/HouseOfCompassion/img1.png";
import house1 from "../../assets/images/HouseOfCompassion/house1.png";
import house2 from "../../assets/images/HouseOfCompassion/house2.png";
import house3 from "../../assets/images/HouseOfCompassion/house3.png";
import house4 from "../../assets/images/HouseOfCompassion/house4.png";

import HousesCard from "../../components/HousesCard";
const events = [
  {
    name: "HOC COMPASSION",
    avatar: house1,
  },
  {
    name: "LOVE COMPANY HI",
    avatar: house2,
  },
  {
    name: "HOC COMPASSION",
    avatar: house3,
  },
  {
    name: "MY LOVE HOUSE E",
    avatar: house4,
  },
  {
    name: "HOC COMPASSION",
    avatar: house2,
  },
  {
    name: "LOVE COMPANY HI",
    avatar: house1,
  },
];
const FindHouse = ({ navigation }: any) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header />
        <HeaderBody
          title="House of Compassion"
          subTitle="You can contact the houses nearest to you"
        />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerBody}>
            <View style={styles.containerImg}>
              <Image source={img1} style={styles.image} resizeMode="cover" />
            </View>
          </View>
          <View style={styles.houseItems}>
            {events.map((event, index) => (
              <HousesCard key={index} name={event.name} avatar={event.avatar} />
            ))}
          </View>
        </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  containerImg: {
    width: "90%",
    height: 300,
    borderRadius: 45,
    overflow: "hidden",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    padding: 20,
  },
  houseItems: {
    marginHorizontal: 20,
    marginVertical: 20
  }
});

export default FindHouse;
