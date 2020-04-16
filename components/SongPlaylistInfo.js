import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SongPlaylistInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Excuse Me For Being Antisocial</Text>
      <Text style={styles.artistName}>Roddy Ricch</Text>
      <Text style={styles.musicType}>Album - 2019</Text>
    </View>
  );
};

export default SongPlaylistInfo;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 36,
  },
  artistName: {
    color: "white",
    fontSize: 12,
    lineHeight: 25,
    fontWeight: "bold",
  },
  musicType: {
    color: "#ccc",
    fontSize: 12,
    lineHeight: 24,
  },
});
