import React from "react";
import { StyleSheet, Text, View } from "react-native";

const containerTextHeight = 41;
const MusicTile = ({ song, artist, viewHeight }) => {
  const parentRatio = viewHeight;
  return (
    <View
      style={[
        styles.container,
        {
          width: parentRatio,
          height: parentRatio + containerTextHeight,
        },
      ]}
    >
      <View
        style={[
          styles.art,
          {
            width: parentRatio,
            height: parentRatio,
          },
        ]}
      ></View>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {song}
        </Text>
        <Text numberOfLines={2} style={styles.author}>
          {artist}
        </Text>
      </View>
    </View>
  );
};

export default MusicTile;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  art: {
    backgroundColor: "white",
    marginBottom: 5,
  },
  textContainer: {
    width: "100%",
  },
  name: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
  },
  author: {
    color: "#ccc",
    fontSize: 12,
    lineHeight: 18,
  },
});
