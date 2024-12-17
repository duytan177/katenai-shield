import { StyleSheet} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { HeaderProfile } from "../../components/HeaderProfile";
const ProfileDetail = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header title={"Profile Detail"}/>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.8 }}
        colors={["#FFFFFF", "#FFE1FF"]}
        style={styles.body}
      >
        <HeaderProfile profileDetailFlg={true} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 1,
  },
});

export default ProfileDetail;
