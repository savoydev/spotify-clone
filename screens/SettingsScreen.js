import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTouch}>
        <View style={styles.profileImage}>
          <Ionicons name="ios-contact" size={36} color="#fff" />
        </View>
        <View style={styles.subtext}>
          <Text style={styles.profileName}>Savoy Sounds</Text>
          <Text style={styles.infoText}>View Profile</Text>
        </View>
        <Ionicons
          style={styles.iconForward}
          name="ios-arrow-forward"
          size={32}
          color="white"
        />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  profileTouch: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subtext: {
    flex: 7,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  profileName: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },
  infoText: {
    color: "#666",
    fontSize: 14,
  },
  iconForward: {
    flex: 1,
  },
  profileImage: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
