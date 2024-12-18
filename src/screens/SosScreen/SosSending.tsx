import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import HeaderBody from "../../components/HeaderBody";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { MainStackParamList } from "../../navigation/MainNavigator";

const TITLE_SCREEN = "SOS Sending";
const SosSending = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(5); // Lưu thời gian còn lại
  const [timerKey, setTimerKey] = useState(0); // Thêm state để reset đồng hồ khi quay lại

  const handleCanceButton = () => {
    navigation.navigate("SosMain", {
      modalSendingFlg: true,
    });
  };

  const handleTimerComplete = () => {
    setIsTimerRunning(false);
    navigation.navigate("SosMain", {
      modalSendingFlg: true,
    });
  };

  // Khi màn hình này được focus lại, đồng hồ sẽ bắt đầu lại từ đầu
  useFocusEffect(
    React.useCallback(() => {
      setRemainingTime(5);
      setIsTimerRunning(true); // Bắt đầu chạy lại đồng hồ
      setTimerKey((prevKey) => prevKey + 1); // Thêm key để reset lại CountdownCircleTimer
    }, [])
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title={TITLE_SCREEN} />
      <HeaderBody
        title={TITLE_SCREEN}
        subTitle="Share live location with your friend"
      />
      <View style={styles.bodySos}>
        <Text style={styles.title}>Sending SOS Alert in</Text>
        <CountdownCircleTimer
          key={timerKey} // Thêm key để reset lại đồng hồ
          isPlaying={isTimerRunning} // Trạng thái chạy của đồng hồ
          duration={remainingTime}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[5, 3, 2, 0]}
          size={220}
          strokeWidth={12} // Độ dày của đường vòng
          isSmoothColorTransition={true}
          onComplete={handleTimerComplete} // Gọi khi đếm ngược hoàn tất
        >
          {({ remainingTime }) => (
            <Text style={styles.timer}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={handleCanceButton}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSkip}
            onPress={handleTimerComplete}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodySos: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  timer: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#FF0000",
    marginVertical: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: "80%",
  },
  buttonCancel: {
    width: 100,
    backgroundColor: "#737373",
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSkip: {
    width: 100,
    backgroundColor: "#FF4343", // Màu nền của nút
    paddingVertical: 10,
    marginHorizontal: 5, // Khoảng cách giữa hai nút
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF", // Màu chữ trên nút
  },
});

export default SosSending;
