import { StyleSheet, View, Text, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location"; // Expo's location API

const TrackMain = () => {
  const mapRef = useRef<MapView | null>(null);
  const [location, setLocation] = useState<Region | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // Kiểm tra và yêu cầu quyền truy cập vị trí
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Lấy vị trí hiện tại
      const currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;
      setLocation({
        latitude,
        longitude,
        latitudeDelta: 0.01, // Độ phóng to bản đồ
        longitudeDelta: 0.01,
      });

      // Di chuyển bản đồ đến vị trí hiện tại
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

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView style={styles.container}>
        <Header />
        <HeaderBody
          title="Track me"
          subTitle="Share live location with your friend"
        />
        <View style={styles.containerBody}>
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            showsUserLocation
            showsMyLocationButton
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title="You are here"
              />
            )}
          </MapView>
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
});

export default TrackMain;
