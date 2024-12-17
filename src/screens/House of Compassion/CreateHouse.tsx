import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import HeaderBody from "../../components/HeaderBody";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import bravo from "../../assets/images/bravo.png"; // Import your bravo image here

const CreateHouse = () => {
  const [image, setImage] = useState<any>(null);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  
  // State to handle modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Function to open image picker
  const pickImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          "Permission",
          "Permission to access media library is required!"
        );
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!pickerResult.canceled) {
        setImage(pickerResult.assets[0].uri);
      } else {
        console.log("User canceled image picker");
      }
    } catch (error) {
      console.error("Error picking image: ", error);
      Alert.alert(
        "Error",
        "An error occurred while picking the image. Please try again."
      );
    }
  };

  const clearAll = () => {
    setImage(null);
    setAddress("");
    setDescription("");
    setPhone("");
  };

  // Function to handle tracking house action and show modal
  const trackHouse = () => {
    console.log("Track house action");
    // Show the modal
    setModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      colors={["#FFFFFF", "#FFE1FF"]}
      style={styles.containerLinerGrandient}
    >
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Header title="Create house" />
        <HeaderBody
          title="House of Compassion"
          subTitle="Creating housing for everyone"
        />

        {/* Wrap the entire content inside KeyboardAvoidingView */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.containerBody}>
              <View style={styles.containerImg}>
                {/* Image selection functionality */}
                <Pressable onPress={pickImage} style={styles.uploadButton}>
                  {image ? (
                    <Image
                      source={{ uri: image }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  ) : (
                    <Ionicons
                      name="cloud-upload-outline"
                      size={50}
                      color="#6F6F6F"
                    />
                  )}
                </Pressable>
              </View>

              <View style={styles.formContainer}>
                <View style={styles.inputField}>
                  <Text style={styles.label}>Address</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type your house address."
                    value={address}
                    onChangeText={setAddress}
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.label}>Description</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type your description."
                    value={description}
                    onChangeText={setDescription}
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.label}>Phone</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="*********"
                    value={phone}
                    onChangeText={setPhone}
                  />
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={clearAll} style={styles.clear}>
                    <Text style={styles.buttonClearText}>Clear All</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={trackHouse} style={styles.button}>
                    <Text style={styles.buttonText}>Track House</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* Modal to show the success message */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Bravo Image above the text */}
              <Image
                source={bravo}
                style={styles.modalImage}
                resizeMode="contain"
              />
              <Text style={styles.modalText}>THANKS FOR YOUR HOUSE</Text>
              <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 30,
  },
  containerImg: {
    width: "90%",
    height: 300,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    padding: 20,
  },
  uploadButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  formContainer: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
  inputField: {
    width: "100%",
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 14,
    color: "#6F6F6F",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    color: "#433878",
    fontWeight: "500",
    height: 50,
    borderWidth: 0,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#FAFAFA",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#433878",
    paddingVertical: 12,
    borderRadius: 5,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  clear: {
    borderRadius: 5,
    borderColor: "#433878",
    borderWidth: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
  },
  buttonClearText: {
    color: "#433878",
    fontWeight: "500",
    fontSize: 17,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 17,
  },
  
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalContent: {
    width: 320,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: "#433878",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CreateHouse;
