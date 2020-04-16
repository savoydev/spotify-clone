import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlaylistSong = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text lineBreakMode="tail" numberOfLines={1} style={styles.songName}>
          This Is A Song
        </Text>
        <Text style={styles.artistName}>Kanye West</Text>
      </View>
      <Ionicons name="ios-more" color="#ccc" size={20} />
    </View>
  );
};

export default PlaylistSong;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  songName: {
    color: "white",
    fontSize: 14,
    lineHeight: 21,
  },
  artistName: {
    fontSize: 12,
    lineHeight: 18,
    color: "#ccc",
  },
});
