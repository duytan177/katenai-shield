import { StyleSheet, View, Text, Pressable, Switch, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import myAvata from "../../assets/images/FakeCall/avatar1.png";

const TrackMain = () => {
  const mapRef = useRef<MapView | null>(null);
  const [location, setLocation] = useState<Region | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [is3D, setIs3D] = useState(false); // State để điều chỉnh chế độ 2D/3D
  const [randomAvatars, setRandomAvatars] = useState<any[]>([]); // Lưu các vị trí ngẫu nhiên cho avatar

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

  // Hàm tạo vị trí ngẫu nhiên
  const generateRandomAvatars = (latitude: number, longitude: number) => {
    let randomAvatars = [];
    for (let i = 0; i < 4; i++) {
      const randomLat = latitude + (Math.random() - 0.5) * 0.05; // Tạo tọa độ ngẫu nhiên xung quanh xa hơn
      const randomLng = longitude + (Math.random() - 0.5) * 0.05; // Tạo tọa độ ngẫu nhiên xung quanh xa hơn
      randomAvatars.push({ latitude: randomLat, longitude: randomLng });
    }
    setRandomAvatars(randomAvatars);
  };

  const zoomToUserLocation = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
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
          title="Track me"
          subTitle="Share live location with your friend"
        />
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
            showsUserLocation
            showsMyLocationButton
            mapType={is3D ? "satellite" : "standard"} // Chuyển đổi giữa 2D và 3D
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              >
                <View style={styles.bodyAvata}>
                  <Image
                    source={myAvata} // Sử dụng biến hình ảnh
                    style={styles.avatarImage} // Áp dụng style từ styles
                  />
                </View>
              </Marker>
            )}

            {/* Các avatar ngẫu nhiên */}
            {randomAvatars.map((avatar, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: avatar.latitude,
                  longitude: avatar.longitude,
                }}
              >
                <View style={[styles.bodyAvata, { backgroundColor: "white" }]}>
                  <Image
                    source={myAvata} // Sử dụng biến hình ảnh
                    style={styles.avatarImage} // Áp dụng style từ styles
                  />
                </View>
              </Marker>
            ))}
          </MapView>
          {/* Nút zoom vào bản thân */}
          <Pressable style={styles.zoomButton} onPress={zoomToUserLocation}>
            <Text style={styles.zoomButtonText}>Zoom to Me</Text>
          </Pressable>
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5, // Đổ bóng
  },
  zoomButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 10,
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
});

export default TrackMain;
