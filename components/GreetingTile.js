import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GreetingTile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.songImage}></View>
      <Text numberOfLines={2} style={styles.songTitle}>
        Birds In The Trap Sing McKnight
      </Text>
    </View>
  );
};

export default GreetingTile;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
    flexGrow: 1,
    flexBasis: "40%",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  songImage: {
    height: 55,
    width: 55,
    backgroundColor: "#fff",
  },
  songTitle: {
    color: "#fff",
    flex: 1,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 12,
  },
});
