import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TileScrollView from "./TileScrollView";

const BigTileScrollView = (props) => {
  return (
    <View>
      <TileScrollView viewHeight={160} {...props} />
    </View>
  );
};

export default BigTileScrollView;

const styles = StyleSheet.create({});
