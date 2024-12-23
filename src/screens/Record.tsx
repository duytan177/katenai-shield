import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";
import Header from "../components/Header";
import { RecordingOptionsPresets } from "expo-av/build/Audio";

const TITLE_SCREEN = "Anonymous Recording";

const RecordScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState<any>(null);

  const correctOtp = ["1", "2", "3", "4"];

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (newOtp.join("") === correctOtp.join("")) {
      setIsOtpCorrect(true);
    } else {
      setIsOtpCorrect(false);
    }
  };

  const startRecording = async () => {
    try {

      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) {
        Alert.alert("Permission Denied", "You need to grant audio recording permission.");
        return;
      }
      const recording = await Audio.Recording.createAsync(
        RecordingOptionsPresets.LOW_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
    } catch (error:any) {
      Alert.alert(error);
    }
  };

  const stopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log("Recording saved at:", uri);
        setRecording(null);
        setIsRecording(false);
      }
    } catch (error) {
      Alert.alert("Error", "Could not stop recording.");
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
        <Header title={TITLE_SCREEN} />
        <View style={styles.containerBody}>
          <Text style={styles.title}>Verification your PIN</Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={[styles.otpInput, isOtpCorrect ? styles.correct : styles.incorrect]}
                keyboardType="number-pad"
                maxLength={1}  
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
              />
            ))}
          </View>
          {isOtpCorrect ? (
            <TouchableOpacity style={styles.agreeButton} onPress={() => startRecording}>
              <Text style={styles.buttonText}>{isRecording ? "Recording..." : "Start Record"}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          )}
          {isRecording && (
            <TouchableOpacity style={styles.stopButton} onPress={stopRecording}>
              <Text style={styles.buttonText}>Stop Recording</Text>
            </TouchableOpacity>
          )}
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  correct: {
    borderColor: "green",
  },
  incorrect: {
    borderColor: "red",
  },
  agreeButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  stopButton: {
    backgroundColor: "#ff9933",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RecordScreen;
