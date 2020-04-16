import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

const SongPlaylistBackground = () => {
  const inset = useSafeArea();
  return (
    <View
      style={[
        styles.container,
        {
          top: inset.top,
        },
      ]}
    >
      <View style={styles.playlistBackground}></View>
    </View>
  );
};

export default SongPlaylistBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  playlistBackground: {
    height: 280,
    width: 280,
    backgroundColor: "white",
  },
});
