import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import SearchCategoryTile from "./SearchCategoryTile";

const SearchCategoryGroup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your top genres</Text>
      <View style={styles.categories}>
        <TouchableWithoutFeedback>
          <SearchCategoryTile genre="Hip-Hop" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <SearchCategoryTile genre="Pop" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <SearchCategoryTile genre="R&B" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <SearchCategoryTile genre="Indie" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SearchCategoryGroup;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
