import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TileScrollView from "./TileScrollView";
import scrollViews from "../data/scrollViews.json";
import SmallTileScrollView from "./SmallTileScrollView";

const RecentPlays = () => {
  return (
    <View style={styles.container}>
      <SmallTileScrollView {...scrollViews[1]} />
    </View>
  );
};

export default RecentPlays;

const styles = StyleSheet.create({});
