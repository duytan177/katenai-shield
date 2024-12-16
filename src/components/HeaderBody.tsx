import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const HeaderBody = ({ title, subTitle, iconButtonRight = null }: any) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1.6 }}
      colors={["#FFFFFF", "#FFE1FF"]}
    >
      <View style={styles.headerBody}>
        <View style={[styles.topLeft, { flex: iconButtonRight ? 0.8 : 1 }]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
        {iconButtonRight && (
          <View style={styles.topRight}>
            <Pressable
              style={styles.button}
              onPress={() => {
                console.log(11111111111);
              }}
            >
              <Image source={iconButtonRight} style={styles.buttonImage} />
            </Pressable>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerBody: {
    // flex: 0.2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 19,
    borderBottomWidth: 0.2,
  },

  topLeft: {
    // flex: 0.8,
  },
  topRight: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 14,
    color: "#000000",
    marginTop: 3,
    marginBottom: 3,
    // minWidth: "90%",
  },
  button: {
    backgroundColor: "#433878",
    width: 80,
    height: 80,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonImage: {
    width: 45,
    height: 45,
  },
});

export default HeaderBody;
