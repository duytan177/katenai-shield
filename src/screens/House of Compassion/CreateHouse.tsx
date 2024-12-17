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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import HeaderBody from "../../components/HeaderBody";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const CreateHouse = () => {
  const [image, setImage] = useState<any>(null);

  // Function to open image picker
  const pickImage = async () => {
    try {
      // Yêu cầu quyền truy cập thư viện ảnh
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      // Kiểm tra quyền truy cập
      if (!permissionResult.granted) {
        Alert.alert(
          "Permission",
          "Permission to access media library is required!"
        );
        return;
      }

      // Mở thư viện ảnh
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      // Kiểm tra kết quả
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
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.label}>Description</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type your description."
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.label}>Phone</Text>
                  <TextInput style={styles.input} placeholder="*********" />
                </View>
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
});

export default CreateHouse;
