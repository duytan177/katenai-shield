import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBody from "../components/HeaderBody";

const EventsScreen = () => {
  return (
    <SafeAreaView style={{flex:1,}}>
      <Header />
    <HeaderBody title="test" subTitle="hello"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default EventsScreen;
