import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileMain = () => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Pressable>
          <Text>ProfileMain</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProfileMain;
