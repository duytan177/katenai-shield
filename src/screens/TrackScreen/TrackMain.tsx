import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackMain = () => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Pressable>
          <Text>TrackMain</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackMain;
