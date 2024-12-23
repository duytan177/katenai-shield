import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio } from "expo-av";
import { RecordingOptionsPresets } from "expo-av/build/Audio";

const TITLE_SCREEN = "Anonymous Recording";

const RecordMain = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState<any>(null);
  const [recordHistory, setRecordHistory] = useState<string[]>([]);
  const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false);
  const correctPin = "1234";
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái Play/Pause
  const [sound, setSound] = useState<Audio.Sound | null>(null); // Đối tượng  const correctPin = "1234";
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handlePinChange = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newPin.join("") === correctPin) {
      setIsOtpCorrect(true);
    } else {
      setIsOtpCorrect(false);
    }
  };

  const clearPin = () => {
    setPin(["", "", "", ""]);
    setIsOtpCorrect(false);
    inputRefs.current[0]?.focus();
  };

  const startRecording = async () => {
    try {
      // Set audio mode for recording
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        staysActiveInBackground: true, // Giữ hoạt động khi ứng dụng chuyển sang nền
      });
      // Request permissions
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) {
        Alert.alert(
          "Permission Denied",
          "You need to grant audio recording permission."
        );
        return;
      }

      // Start recording
      const { recording } = await Audio.Recording.createAsync(
        RecordingOptionsPresets.HIGH_QUALITY // Option for better quality, adjust as needed
      );
      setRecording(recording);
      setIsRecording(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not start recording.");
    }
  };

  const stopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setRecordHistory((prev) => [...prev, uri || "Unknown"]);
        setRecording(null);
        setIsRecording(false);
      }
    } catch (error) {
      Alert.alert("Error", "Could not stop recording.");
    }
  };

  const playRecording = async (uri: string) => {
    try {
      if (isPlaying) {
        // Nếu đang phát, tạm dừng bản ghi
        await sound?.pauseAsync();
        setIsPlaying(false);
      } else {
        // Nếu không, phát bản ghi
        const { sound: newSound } = await Audio.Sound.createAsync({ uri });
        await newSound.setVolumeAsync(1.0);
        await newSound.playAsync();
        setSound(newSound);
        setIsPlaying(true);

        // Xử lý khi âm thanh kết thúc
        newSound.setOnPlaybackStatusUpdate((status: any) => {
          if (status.didJustFinish) {
            setIsPlaying(false); // Đặt lại trạng thái khi phát xong
          }
        });
      }
    } catch (error) {
      Alert.alert("Error", "Could not play the recording.");
    }
  };

  const renderHistoryItem = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}>Recording {index + 1}</Text>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => playRecording(item)}
      >
        <Text style={styles.buttonText}>
          {isPlaying ? "Stop" : "Play"}
          {/* Thay đổi chữ dựa trên trạng thái */}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBody}>
        <Text style={styles.title}>Enter Your PIN</Text>
        <View style={styles.pinContainer}>
          {pin.map((value, index) => (
            <TextInput
              key={index}
              style={[
                styles.pinInput,
                value ? styles.correct : styles.incorrect,
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={(text) => handlePinChange(text, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>
        {!isOtpCorrect && pin.some((p) => p) && (
          <Text style={styles.errorText}>Incorrect PIN. Please try again.</Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.cancelButton, isRecording && { opacity: 0.5 }]}
            disabled={isRecording}
            onPress={clearPin}
          >
            <Text style={[styles.buttonText]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.recordButton, { opacity: isOtpCorrect ? 1 : 0.5 }]}
            disabled={!isOtpCorrect}
            onPress={isRecording ? stopRecording : startRecording}
          >
            <Text style={styles.buttonText}>
              {isRecording ? "Stop Recording" : "Start Recording"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.historyButton}
          onPress={() => setIsHistoryModalVisible(true)}
        >
          <Text style={styles.buttonText}>View History</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Recording History */}
      <Modal visible={isHistoryModalVisible} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Recording History</Text>
          <FlatList
            data={recordHistory}
            renderItem={renderHistoryItem}
            keyExtractor={(item, index) => `${item}-${index}`}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsHistoryModalVisible(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3d3e3f",
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
    marginBottom: 20,
  },
  pinInput: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    backgroundColor: "#fff",
  },
  correct: {
    borderColor: "#27ae60",
  },
  incorrect: {
    borderColor: "#e74c3c",
  },
  errorText: {
    color: "#e74c3c",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  recordButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  historyButton: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 20,
    marginTop: 30
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2c3e50",
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
  historyText: {
    fontSize: 16,
    color: "#34495e",
  },
  playButton: {
    backgroundColor: "#3498db",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RecordMain;
