import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const HouseOfCompassionMain = () => {
  return (
    <SafeAreaView edges={["top"]}>
      <Header />
      <View>
        <Pressable>
          <Text>HouseOfCompassionMain</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HouseOfCompassionMain;
