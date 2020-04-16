import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlaylistSong from "./PlaylistSong";

const SongPlaylistList = () => {
  const numSongs = 1234567891011121314151617181920;
  return (
    <View style={styles.container}>
      {Array.apply(
        null,
        Array.from(numSongs.toString()).map((Number, index) => {
          return <PlaylistSong key={index} />;
        })
      )}
    </View>
  );
};

export default SongPlaylistList;

const styles = StyleSheet.create({
  container: {},
});
