import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import detailhouse from "../../assets/images/HouseOfCompassion/detailhouse.png";
import heart from "../../assets/images/HouseOfCompassion/heart.png";
import UserCard from "../../components/UserCard";
import avatar3 from "../../assets/images/FakeCall/avatar3.png";

const DetailHouse = ({ navigation }: any) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header title="List Houses" />
        <HeaderBody
          title="HOC COMPASSION"
          subTitle="Detail this house of compassion"
        />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerBody}>
            <Image
              source={detailhouse}
              style={styles.image}
              resizeMode="contain"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
                width: "100%",
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Name: HOC COMPASSION
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={heart}
                  resizeMode="contain"
                  style={styles.heart}
                ></Image>
                <Text>18</Text>
              </View>
            </View>
            <View style={{ flex: 1, width: "95%", marginTop: 5 }}>
              <UserCard
                name={"Nam Tran Hoang"}
                avatar={avatar3}
                des={"Creator"}
              />
            </View>

            {/* Updated form container */}
            <View style={styles.fromContainer}>
              <View style={styles.row}>
                <Text style={styles.label}>Phone: </Text>
                <Text
                  style={styles.link}
                  onPress={() => Linking.openURL("tel:+87456123456")}
                >
                  +87 456 123 456
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Address: </Text>
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.google.com/maps?q=123+Hung+Vuong,+Hai+Chau,+Da+Nang"
                    )
                  }
                >
                  123 Hùng Vương, P. Hải Châu, Đà Nẵng...
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Created </Text>
                <Text style={styles.text}>07 February 2003</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Descriptions </Text>
                <Text style={styles.text}>Contact for more details</Text>
              </View>
            </View>
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
    justifyContent: "flex-start", // Đảm bảo các phần tử được căn lên phía trên thay vì ở giữa
    alignItems: "center",
    width: "100%", // Đảm bảo phần này chiếm hết chiều rộng
    paddingBottom: 20, // Thêm padding để tránh việc ScrollView bị cắt
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Đảm bảo rằng ScrollView có đủ không gian để cuộn
  },
  image: {
    width: "100%",
    height: 250, // Giới hạn chiều cao của hình ảnh
    borderRadius: 30,
    padding: 20,
  },
  heart: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  fromContainer: {
    backgroundColor: "#F8F1FF",
    padding: 20,
    width: "100%", // Đảm bảo formContainer chiếm hết chiều rộng
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // Đảm bảo label và text được căn đều
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 14,
    flex: 1, // Cho phép label chiếm phần không gian còn lại
  },
  text: {
    color: "#333",
    fontSize: 14,
    flex: 2, // Cho phép text chiếm phần không gian còn lại
    textAlign: "left", // Đảm bảo text nằm ở bên phải
  },
  link: {
    color: "#4686FA",
    fontSize: 14,
    textDecorationLine: "underline",
    flex: 2, // Cho phép link chiếm phần không gian còn lại
    textAlign: "left", // Đảm bảo link nằm bên phải
  },
});

export default DetailHouse;
