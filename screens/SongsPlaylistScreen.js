import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SongsPlaylistScreen = ({ route, navigation }) => {
  const { atist, song } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.songName}>{song}</Text>
    </SafeAreaView>
  );
};

export default SongsPlaylistScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  songName: {
    color: "#fff",
  },
});
