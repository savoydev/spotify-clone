import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SongPlaylistInfo from "./SongPlaylistInfo";
import SongPlaylistActions from "./SongPlaylistActions";
import SongPlaylistList from "./SongPlaylistList";
import Animated from "react-native-reanimated";

const SongPlaylistContainer = () => {
  const [scrollY] = useState(new Animated.Value(0));

  return (
    <View style={styles.container}>
      <SongPlaylistInfo />
      <SongPlaylistActions />
      <SongPlaylistList />
    </View>
  );
};

export default SongPlaylistContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 380,
    paddingHorizontal: 20,
  },
});
