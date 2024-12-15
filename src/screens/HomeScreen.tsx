import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import speakerImg from "../assets/images/HomeView/speake-view.png";
import anocall from "../assets/images/HomeView/anocall.png";
import blogs from "../assets/images/HomeView/blogs.png";
import fakecall from "../assets/images/HomeView/fakecall.png";
import house from "../assets/images/HomeView/house.png";
import record from "../assets/images/HomeView/record.png";
import safetips from "../assets/images/HomeView/safetips.png";
import sos from "../assets/images/HomeView/sos.png";
import trackme from "../assets/images/HomeView/trackme.png";

const FeatureItem = ({ title, imageSource }: any) => {
  return (
    <TouchableOpacity style={styles.featureItem}>
      <Image source={imageSource} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const handleViewDetails = () => {
    console.log("Navigating to details...");
  };

  const data = [
    { id: "1", title: "Track me", imageSource: trackme },
    { id: "2", title: "House of Compassion", imageSource: house },
    { id: "3", title: "Fakecall", imageSource: fakecall },
    { id: "4", title: "SOS", imageSource: sos },
    { id: "5", title: "Safe Tips", imageSource: safetips },
    { id: "6", title: "Records", imageSource: record },
    { id: "7", title: "Blogs", imageSource: blogs },
    { id: "8", title: "Anonymous Call", imageSource: anocall },
  ];

  const renderItem = ({ item }: any): any => {
    return <FeatureItem title={item.title} imageSource={item.imageSource} />;
  };

  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <LinearGradient
            start={{ x: 0.5, y: 2.2 }}
            end={{ x: 0.9, y: 1 }}
            colors={["#88B8CC", "#445C66"]}
            style={styles.cardSpeaker}
          >
            <View style={styles.container}>
              <View style={styles.ovalBackground}></View>
              <Image source={speakerImg} style={styles.speakerImage} />
              <View style={styles.textContainer}>
                <Text style={styles.textFirst}>
                  Có một sự kiện của một diễn giả có thể bạn quan tâm
                </Text>
                <TouchableOpacity
                  onPress={handleViewDetails}
                  style={styles.button}
                  activeOpacity={0.7}
                >
                  <Text style={styles.buttonText}>View detail</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.textPrevious}>
                    Look back at previous events.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* FlatList for Feature Items */}
        <View style={styles.featureCard}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2} // Mỗi hàng có 2 item
            contentContainerStyle={styles.featureCardContent}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Đảm bảo ScrollView sẽ cuộn khi cần
  },
  cardContainer: {
    margin: 20,
  },
  cardSpeaker: {
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "100%",
    height: 155,
    position: "relative",
  },
  ovalBackground: {
    position: "absolute",
    bottom: -20,
    left: 20,
    height: "100%",
    width: 95,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    zIndex: -1,
  },
  speakerImage: {
    height: "92%",
    width: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginRight: -20,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    marginRight: 15,
    marginBottom: 5,
    justifyContent: "center",
    minHeight: "90%",
  },
  textFirst: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  textPrevious: {
    color: "white",
    fontWeight: "300",
    textDecorationLine: "underline",
    fontSize: 12,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#445C66",
    fontSize: 12,
    fontWeight: "bold",
  },
  featureCard: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  featureCardContent: {
    justifyContent: "space-between",
  },
  featureItem: {
    width: "48%", // Mỗi item chiếm 48% chiều rộng
    marginBottom: 15,
    alignItems: "center",
  },
  itemImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default HomeScreen;
