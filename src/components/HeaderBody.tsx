import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import React from "react";

const HeaderBody = ({ title, subTitle, iconButtonRight= null }: any) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  headerBody: {
    flex: 0.2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 24,
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
    fontSize: 16,
    color: "#000000",
    marginVertical: 12,
    maxWidth: "80%",
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
