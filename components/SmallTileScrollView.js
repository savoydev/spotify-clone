import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TileScrollView from "./TileScrollView";

const SmallTileScrollView = (props) => {
  return (
    <View>
      <TileScrollView viewHeight={120} {...props} />
    </View>
  );
};

export default SmallTileScrollView;

const styles = StyleSheet.create({});
