import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchHeading = (props) => {
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.heading]}>Search</Animated.Text>
      <View style={styles.fakeInput}>
        <TouchableWithoutFeedback>
          <View style={styles.searchTouch}>
            <Ionicons
              name="ios-search"
              size={32}
              color="#333"
              style={styles.searchIcon}
            />
            <Text style={styles.fakeInputText}>
              Artists, songs, or podcasts
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={props.goToSeachInputScreen}>
          <Ionicons
            name="ios-mic"
            size={32}
            color="#333"
            style={styles.micIcon}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SearchHeading;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  heading: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 48,
    marginBottom: 10,
  },
  fakeInput: {
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fakeInputText: {
    fontSize: 16,
  },
  searchTouch: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    paddingLeft: 20,
    paddingVertical: 5,
  },
  micIcon: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
});
