import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Switch,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import MapView, { Marker, Callout, Region, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Thêm icon thư viện MaterialIcons

import myAvata from "../../assets/images/FakeCall/avatar1.png";
import house from "../../assets/images/Trackme/house.png";
import user1 from "../../assets/images/Trackme/user1.png";
import user2 from "../../assets/images/Trackme/user2.png";
import notiHelp from "../../assets/images/Sos/notiHelp.png";
import directions from "../../assets/images/Sos/directions.png";
import SosNotiModal from "../../components/SosNotiModal";
import SOSHelp from "../../assets/images/Sos/SOSHelp.png";

const TITLE_SCREEN = "SOS Alert";
const SosMapHelp = ({ navigation, route }: any) => {
  const invisibleFlg = route.params?.invisibleHelp;
  const locationHelpDetail = route.params?.locationHelp;
  const mapRef = useRef<MapView | null>(null);
  const [location, setLocation] = useState<Region | null>(null);
  const [locationHelp, setLocationHelp] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [is3D, setIs3D] = useState(false); // State để điều chỉnh chế độ 2D/3D
  const [randomAvatars, setRandomAvatars] = useState<any[]>([]); // Lưu các vị trí ngẫu nhiên cho avatar
  const [invisibleHelp, setInvisibleHelp] = useState<Boolean>(invisibleFlg);
  const [findHelp, setFindHelp] = useState<any>(false);
  const [modalFindHelp, setModalFindHelp] = useState< any>(false);
  const closeModalFindHelp = () => {
    setModalFindHelp(false);
  };
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;
      setLocation({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      // Tạo các vị trí ngẫu nhiên quanh bạn
      generateRandomAvatars(latitude, longitude);

      mapRef.current?.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    })();
  }, []);

  // Hàm tạo vị trí ngẫu nhiên và gán hình ảnh avatar
  const generateRandomAvatars = (latitude: number, longitude: number) => {
    const avatars = [user1, house, user1, user2]; // Danh sách các hình ảnh avatar

    let randomAvatars = [];
    for (let i = 0; i < 1; i++) {
      let randomLat = 0;
      let randomLng = 0;
      if (locationHelpDetail) {
        randomLat = locationHelpDetail["latitude"];
        randomLng = locationHelpDetail["longitude"];
      } else {
        randomLat = latitude + (Math.random() - 0.5) * 0.05; // Tạo tọa độ ngẫu nhiên xung quanh xa hơn
        randomLng = longitude + (Math.random() - 0.5) * 0.05; // Tạo tọa độ ngẫu nhiên xung quanh xa hơn
      }

      setLocationHelp({
        latitude: randomLat,
        longitude: randomLng,
      });

      randomAvatars.push({
        latitude: randomLat,
        longitude: randomLng,
        avatarImage: avatars[i], // Gán hình ảnh avatar cho mỗi vị trí ngẫu nhiên
      });
    }
    setRandomAvatars(randomAvatars);
  };

  const zoomToUserLocation = () => {
    if (location && mapRef.current) {
      mapRef.current?.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000 // Thời gian chuyển động (ms)
      );
    }
  };

  const onHandleHelpDetail = () => {
    setInvisibleHelp(false);
    navigation.navigate("SosMapHelpStack", {
      invisibleHelp: true,
      locationHelp: locationHelp,
    });
  };


  const onHandleFindHelp = () => {
    setFindHelp(true);
    setTimeout(() => {
      setModalFindHelp(true)
    }, 3000);
  };

  useEffect(() => {
    if (modalFindHelp && findHelp){
      setTimeout(() => {
        setModalFindHelp(false)
      }, 2000);
    }
  }, [findHelp, modalFindHelp]);

  const onHandleSafeCode = () => {
    navigation.navigate("HomeTabs", {
      screen: "SosAlertSafeCode"
    })
  }
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header title={TITLE_SCREEN} />
        {!invisibleHelp && (
          <View style={styles.modalContent}>
            <View style={styles.infor}>
              <Image source={user1} style={styles.sendingIcon} />
              <View style={styles.inforDetail}>
                <View style={styles.nameIcon}>
                  <Text style={styles.modalMessage}>Tài </Text>
                  <Image source={notiHelp} style={styles.icon} />
                </View>
                <Text style={styles.modalMessage}>Need Your Help</Text>
              </View>
            </View>
            <View style={styles.safeCode}>
              <Text style={styles.safeCodeText}>Safe code</Text>
              <Text style={styles.safeCodeTextNumber}>8527</Text>
            </View>
          </View>
        )}
        <View style={styles.containerBody}>
          {/* Switch để chọn chế độ 2D/3D */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Map Mode:</Text>
            <Text style={styles.modeText}>{is3D ? "3D" : "2D"}</Text>
            <Switch value={is3D} onValueChange={(value) => setIs3D(value)} />
          </View>
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            showsUserLocation={!findHelp}
            showsMyLocationButton
            mapType={is3D ? "satellite" : "standard"}
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: findHelp ? randomAvatars[0].latitude - 0.0005 :location.latitude ,
                  longitude: findHelp ? randomAvatars[0].longitude :location.longitude,
                }}
              >
                <TouchableOpacity onPress={onHandleFindHelp} style={styles.bodyAvata}>
                  <Image source={myAvata} style={styles.avatarImage} />
                </TouchableOpacity>
              </Marker>
            )}

            {/* Render các Marker với Callout */}
            {randomAvatars.map((avatar, index) => (
              <Marker
                key={index}
                onPress={onHandleHelpDetail}
                coordinate={{
                  latitude: avatar.latitude,
                  longitude: avatar.longitude,
                }}
              >
                <View style={[styles.bodyAvata, { backgroundColor: "white" }]}>
                  <Image
                    source={avatar.avatarImage}
                    style={styles.avatarImage}
                  />
                </View>

                {/* Callout phải nằm trong Marker */}
                {avatar.avatarImage === house && (
                  <Callout
                    style={styles.calloutContainer}
                    onPress={() => {
                      navigation.navigate("HouseOfCompassionMain");
                    }}
                  >
                    <Text style={styles.calloutTextHeader}>
                      House of Compassion
                    </Text>
                    <Text style={styles.calloutText}>179 Phan Dinh Phung</Text>
                    <Text style={styles.calloutText}>Ngu Hanh Son</Text>
                    <Text style={styles.calloutText}>Da Nang, Vietnam</Text>
                    <Text style={styles.calloutViewHouse}>
                      View detail a house ❤️
                    </Text>
                  </Callout>
                )}
              </Marker>
            ))}

            {/* Vẽ đường nối từ vị trí người dùng tới các avatar ngẫu nhiên */}
            {!findHelp && invisibleHelp && location &&
              randomAvatars.map((avatar, index) => (
                <Polyline
                  key={index}
                  coordinates={[
                    {
                      latitude: location.latitude,
                      longitude: location.longitude,
                    },
                    { latitude: avatar.latitude, longitude: avatar.longitude },
                  ]}
                  strokeColor="red"
                  strokeWidth={3}
                />
              ))}
          </MapView>

          {/* Nút zoom vào bản thân */}
          <TouchableOpacity
            style={styles.zoomButton}
            onPress={zoomToUserLocation}
            activeOpacity={0.7}
          >
            <MaterialIcons name="my-location" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={zoomToUserLocation}
            style={styles.trackMeButton}
          ></TouchableOpacity>
        </View>
        {invisibleHelp && (
          <View style={styles.modalDirections}>
            <View style={styles.infor}>
              <Image source={directions} style={styles.sendingIcon} />
              <View style={styles.inforDetail}>
                <Text style={styles.modalMessage}>Directions </Text>
                <Text style={styles.modalMessage}>1.27 km away</Text>
              </View>
            </View>
          </View>
        )}

        {invisibleHelp && (
          <TouchableOpacity onPress={onHandleSafeCode} style={styles.modalSafeCode}>
              <View style={styles.inforDetailSafeCode}>
                <Text style={styles.modalMessageSafeCode}>Safe Code </Text>
                <Text style={[styles.modalMessageSafeCode]}>8527</Text>
              </View>
            </TouchableOpacity>
        )}

        <SosNotiModal
                isModalVisible={modalFindHelp}
                closeModal={closeModalFindHelp}
                title={""}
                subTitle={"If it seems like your friend is near, keep your device in SOS mode until your friend comes to your rescue"}
                imageTitle={SOSHelp}
        />
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
  switchContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 6, // Thêm khoảng cách bên trong
    backgroundColor: "white", // Nền trắng
    borderRadius: 10, // Bo góc
    elevation: 5, // Đổ bóng (Android)
    shadowColor: "#000", // Đổ bóng (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000, // Đảm bảo hiển thị trên bản đồ
  },
  switchLabel: {
    fontSize: 13,
    marginRight: 10,
    color: "#333", // Màu chữ
  },
  modeText: {
    fontSize: 13,
    marginRight: 10,
    fontWeight: "bold",
    color: "#333", // Màu chữ
  },
  zoomButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 30,
    elevation: 5, // Đổ bóng
  },
  zoomButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 10,
  },
  trackMeButton: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  trackMeButtonGradient: {
    flex: 1,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 5,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  trackMeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  bodyAvata: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "red",
    padding: 2,
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  calloutContainer: {
    padding: 5,
    width: 200,
  },
  calloutTextHeader: {
    fontSize: 15,
    color: "black",
    fontWeight: "600",
    marginBottom: 6,
  },
  calloutText: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
    marginBottom: 6,
  },
  calloutViewHouse: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "400",
    marginBottom: 6,
  },

  modalContent: {
    backgroundColor: "#FF6363",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  infor: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  inforDetail: {
    marginLeft: 10,
    alignItems: "flex-start",
  },
  sendingIcon: {
    height: 55,
    width: 55,
  },
  modalMessage: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 5,
  },

  safeCode: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  safeCodeText: {
    color: "#FFFFFF",
    marginVertical: 5,
    fontSize: 16,
  },

  safeCodeTextNumber: {
    marginVertical: 5,
    fontSize: 16,
    color: "#000000",
  },

  nameIcon: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginLeft: 10,
    height: 20,
    width: 20,
  },

  modalDirections: {
    backgroundColor: "#FF6363",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    bottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },

  modalSafeCode: {
    backgroundColor: "#000000",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    top: 0,
    right: 0,
    marginTop: 120,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },

  inforDetailSafeCode: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  modalMessageSafeCode: {
    fontSize: 16,
    color: "#FFFFFF",
    marginVertical: 5,
  },
});

export default SosMapHelp;
