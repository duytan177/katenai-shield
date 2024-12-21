import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBody from "../../components/HeaderBody";
import SOSNoti from "../../assets/images/Sos/SOSNoti.png";

const TITLE_SCREEN = "SOS";

const SosAlertSafeCode = () => {
  const [safeCode, setSafeCode] = useState<string[]>(["", "", "", ""]); // Mã OTP 4 ký tự
  const inputs = useRef<Array<TextInput | null>>([]); // Tham chiếu đến các ô input

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const newSafeCode = [...safeCode];
    newSafeCode[index] = text;
    setSafeCode(newSafeCode);

    // Chuyển sang ô tiếp theo nếu có ký tự
    if (text && index < safeCode.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const renderSafeCodeInput = () => {
    return (
      <View style={styles.safeCodeContainer}>
        {safeCode.map((value, index) => (
          <TextInput
            key={index}
            style={styles.safeCodeInput}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputs.current[index] = ref)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                handleBackspace(value, index);
              }
            }}
          />
        ))}
      </View>
    );
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
        <HeaderBody
          title={"SOS Alert"}
          subTitle="Contact with your friend to perform this operation"
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoiding}
        >
          <ScrollView
            contentContainerStyle={styles.scrollViewContentContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, marginBottom: 20 }}
          >
            <View style={styles.circleContainer}>
              <View style={styles.circleOuter} />
              <View style={styles.circleMiddle} />
              <View style={styles.circleInner}>
                <Image source={SOSNoti} style={styles.sosImage} />
              </View>
            </View>

            <Text style={styles.titleSOSContact}>
              Your SOS Contact has been notified!
            </Text>
            <View style={styles.bodyInputOTP}>
              {/* <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "padding"}
              style={styles.keyboardAvoiding}
            > */}
              <Text style={styles.instructionText}>Enter Safe OTP </Text>
              <Text style={styles.subInstructionText}>
                Enter the Safe OTP sent to your SOS Contacts
              </Text>

              {renderSafeCodeInput()}
              {/* </KeyboardAvoidingView> */}

              <Text style={styles.bottomInstructionText}>
                To stop the SOS, enter the Safe OTP sent to your SOS Contacts
              </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.resendButton}>
                  <Text style={styles.buttonText}>Resend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.okayButton}>
                  <Text style={styles.buttonText}>Okay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  circleContainer: {
    marginVertical: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  circleOuter: {
    position: "absolute",
    backgroundColor: "rgba(237,76,92,0.05)",
    width: 160,
    height: 160,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  circleMiddle: {
    position: "absolute",
    backgroundColor: "rgba(237,76,92,0.12)",
    opacity: 12,
    width: 120,
    height: 120,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  circleInner: {
    position: "absolute",
    backgroundColor: "#ED4C5C",
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  sosImage: {
    width: 40,
    height: 40,
    zIndex: 4,
    tintColor: undefined,
  },
  titleSOSContact: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bodyInputOTP: {
    backgroundColor: "#F9DDFF",
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
  },
  keyboardAvoiding: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  instructionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#1A2530",
    textAlign: "center",
  },
  subInstructionText: {
    fontSize: 14,
    marginBottom: 10,
    color: "#1A2530",
    textAlign: "center",
  },
  safeCodeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  safeCodeInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  bottomInstructionText: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  resendButton: {
    backgroundColor: "#4972E5",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  okayButton: {
    backgroundColor: "#5DB751",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SosAlertSafeCode;
