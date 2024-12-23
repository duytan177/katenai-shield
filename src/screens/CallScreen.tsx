import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Audio } from "expo-av";

const { width, height } = Dimensions.get("window");

const CallScreen = ({ route, navigation }) => {
  const { phoneNumber, name, avatar } = route.params;
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [callDuration, setCallDuration] = useState<number>(0); // For storing the call duration
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // To store the timer reference

  useEffect(() => {
    playSound();
    return () => {
      stopSound();
    };
  }, []);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/ringtone.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const stopSound = async () => {
    if (sound) {
      try {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
      } catch (error) {
        console.error("Error stopping sound:", error);
      }
    }
  };

  const endCall = async () => {
    await stopSound();
    if (timer) clearInterval(timer); // Stop the timer
    setTimer(null);
    navigation.goBack();
  };

  const acceptCall = () => {
    stopSound();
    startCallTimer(); // Start the timer when the call is accepted
  };

  const startCallTimer = () => {
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1); // Increment the call duration every second
    }, 1000);
    setTimer(interval);
  };

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.incomingCall}>Incoming Call</Text>
      </View>
      <View style={styles.callerInfo}>
        <Text style={styles.callerName}>{name}</Text>
        <Text style={styles.callerPhone}>{phoneNumber}</Text>
      </View>
      {callDuration > 0 && (
        <View style={styles.timer}>
          <Text style={styles.timerText}> {formatDuration(callDuration)}</Text>
        </View>
      )}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAccept} onPress={acceptCall}>
          <Image
            source={require("../assets/images/Call/accept.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDecline} onPress={endCall}>
          <Image
            source={require("../assets/images/Call/decline.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#598285",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  header: {
    marginTop: 15,
    alignItems: "center",
  },
  incomingCall: {
    fontSize: 20,
    color: "#F4F4F8",
    letterSpacing: 1,
  },
  callerInfo: {
    alignItems: "center",
  },
  callerName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  callerPhone: {
    fontSize: 18,
    color: "#B0B0C3",
    marginTop: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  buttonAccept: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDecline: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  timer: {
    marginTop: 20,
  },
  timerText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default CallScreen;
