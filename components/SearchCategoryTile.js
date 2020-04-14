import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SearchCategoryTile = ({ image, genre }) => {
  image = "https://i.picsum.photos/id/671/200/200.jpg";
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={{ height: 200, width: 180 }}
        source={{ uri: image }}
      />
      <Text style={styles.categoryText}>{genre}</Text>
    </View>
  );
};

export default SearchCategoryTile;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
    height: 100,
    marginBottom: 10,
  },
  categoryText: {
    color: "#fff",
    fontWeight: "bold",
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 18,
    lineHeight: 27,
  },
});
