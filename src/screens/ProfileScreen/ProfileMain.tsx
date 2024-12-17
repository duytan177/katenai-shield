import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import avatar1 from "../../assets/images/FakeCall/avatar1.png";
import verify from "../../assets/images/Profile/verify.png";
import survey from "../../assets/images/Profile/survey.png";
import friend from "../../assets/images/Profile/friend.png";
import block from "../../assets/images/Profile/block.png";
import feedback from "../../assets/images/Profile/feedback.png";
import setting from "../../assets/images/Profile/setting.png";
import help from "../../assets/images/Profile/help.png";
import language from "../../assets/images/Profile/language.png";
import donate from "../../assets/images/Profile/donate.png";
import logout from "../../assets/images/Profile/logout.png";

import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../../navigation/MainNavigator";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderProfile } from "../../components/HeaderProfile";
import { VerifyButton } from "../../components/VerifyButton";

const CardItem = ({ imageSource, name, onHandleNavigator }: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onHandleNavigator(name);
      }}
      style={styles.card}
    >
      <View style={styles.textContainer}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProfileMain = () => {
  const [isVerifiedVisible, setIsVerifiedVisible] = useState(true); // Quản lý trạng thái hiển thị
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const onHandleViewProfile = () => {
    navigation.navigate("ProfileDetail")
  };

  const onHandleCloseVerified = () => {
    setIsVerifiedVisible(false);
  };

  // Mock data cho các CardItem
  const cardItems = [
    {
      imageSource: survey,
      name: "Survey",
    },
    {
      imageSource: friend,
      name: "Friends",
    },
    {
      imageSource: block,
      name: "Block",
    },
    {
      imageSource: feedback,
      name: "Feedback",
    },
    {
      imageSource: setting,
      name: "Settings",
    },
    {
      imageSource: help,
      name: "Help",
    },
    {
      imageSource: language,
      name: "Language",
    },
    {
      imageSource: donate,
      name: "Donate",
    },
    {
      imageSource: logout,
      name: "Logout",
    },
  ];

  const onHandleNavigator = (name: string) => {
    switch (name) {
      case cardItems[0]["name"]:
        console.log(name);
        break;
      case cardItems[1]["name"]:
        console.log(name);
        break;
      case cardItems[2]["name"]:
        console.log(name);
        break;
      case cardItems[3]["name"]:
        console.log(name);
        break;
      case cardItems[4]["name"]:
        console.log(name);
        break;
      case cardItems[5]["name"]:
        console.log(name);
        break;
      case cardItems[6]["name"]:
        console.log(name);
        break;
      case cardItems[7]["name"]:
        console.log(name);
        break;
      case cardItems[8]["name"]:
        navigation.navigate("Login");
        break;
    }
  };
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title={"Profile"}/>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.8 }}
        colors={["#FFFFFF", "#FFE1FF"]}
        style={styles.body}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderProfile onHandleViewProfile={onHandleViewProfile}/>
          {isVerifiedVisible && (
            <View style={styles.verified}>
              <View style={styles.inforVerify}>
                <View style={styles.messageVerify}>
                  <Text style={styles.message}>
                    Verify your account so we can better assist you.
                  </Text>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1.8 }}
                    colors={["#03CC4C", "#12F212"]}
                    style={styles.gradientButton}
                  >
                    <TouchableOpacity>
                      <VerifyButton title={"Verify now"}/>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                <View style={styles.viewVerifyIcon}>
                  <Image source={verify} style={styles.verifyIcon} />
                </View>
              </View>
              <TouchableOpacity
                onPress={onHandleCloseVerified}
                style={styles.iconClose}
              >
                <Ionicons name="close-circle-sharp" size={26} color="#000000" />
              </TouchableOpacity>
            </View>
          )}

          <Text style={styles.titleOptions}>Interaction options</Text>
          <View style={styles.lineHorizontal}></View>

          <View style={styles.gridContainer}>
            {cardItems.map((item, index) => (
              <CardItem
                key={index}
                imageSource={item.imageSource}
                name={item.name}
                onHandleNavigator={onHandleNavigator}
              />
            ))}
          </View>
          <View style={styles.lineHorizontal}></View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  verified: {
    height: 100,
    width: "100%",
    backgroundColor: "#8FF9FF",
    marginBottom: 20,
  },
  inforVerify: {
    paddingTop: 20,
    paddingLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  messageVerify: {
    flex: 7.5,
    flexDirection: "column",
  },
  message: {
    fontSize: 14,
    fontWeight: "bold",
  },
  gradientButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 12,
  },
  buttonVerify: {
    fontSize: 10,
    color: "#FFFFFF",
  },
  viewVerifyIcon: {
    flex: 2.5,
    justifyContent: "center",
  },
  verifyIcon: {
    height: 45,
    width: 45,
  },

  iconClose: {
    position: "absolute",
    padding: 7,
    right: 0,
  },

  titleOptions: {
    paddingLeft: 30,
    marginBottom: 20,
    fontSize: 20,
    color: "#433878",
  },
  lineHorizontal: {
    borderWidth: 0.7,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 30,
  },
  card: {
    width: "30%", // 3 card mỗi hàng
    aspectRatio: 1, // Giữ tỉ lệ vuông
    borderRadius: 20,
    backgroundColor: "#F7F5FA",
    marginVertical: 10,
    elevation: 5, // Android

    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // overflow: "hidden",
  },
  image: {
    width: 35,
    height: 35,
    alignSelf: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
});

export default ProfileMain;
