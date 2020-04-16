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
});
