import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SongPlaylistActions = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.icon}
        name="ios-heart-empty"
        color="#ccc"
        size={26}
      />
      <Ionicons
        style={styles.icon}
        name="ios-download"
        color="#ccc"
        size={26}
      />
      <Ionicons style={styles.icon} name="ios-more" color="#ccc" size={26} />
    </View>
  );
};

export default SongPlaylistActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 30,
  },
  playCircle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "green",
    alignSelf: "flex-end",

    right: 0,
  },
  playIcon: {
    top: 1,
    left: 2,
  },
});
