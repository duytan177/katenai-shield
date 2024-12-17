import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import avatar1 from "../assets/images/FakeCall/avatar1.png";
import { VerifyButton } from "./VerifyButton";
import { LinearGradient } from "expo-linear-gradient";

export const HeaderProfile = ({
  profileDetailFlg = false,
  onHandleViewProfile,
}: any) => {
  return (
    <View style={styles.inforProfile}>
      <Image source={avatar1} style={styles.avatar} />
      <View style={styles.infor}>
        <Text style={styles.name}>Le Duy Tan</Text>
        {profileDetailFlg ? (
          <View style={styles.basicInfo}>
            <Text style={styles.number}>+84 123 123 123</Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1.8 }}
              colors={["#03CC4C", "#12F212"]}
              style={styles.gradientButton}
            >
              <VerifyButton title={"Verified"} />
            </LinearGradient>
          </View>
        ) : (
          <TouchableOpacity onPress={onHandleViewProfile}>
            <Text style={styles.viewDetail}>View profile</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inforProfile: {
    flexDirection: "row",
    padding: 30,
  },
  avatar: {
    height: 89,
    width: 89,
    borderRadius: "100%",
  },
  infor: {
    marginLeft: 20,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  viewDetail: {
    fontSize: 14,
    textDecorationLine: "underline",
  },

  basicInfo:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  number: {
    fontStyle: "italic",
    marginRight: 30
  },
  gradientButton: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 10,
  },
});
