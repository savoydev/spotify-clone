import React from "react";
import { StyleSheet, Text, View } from "react-native";
import scrollViews from "../data/scrollViews.json";
import GreetingTile from "./GreetingTile";

const HomeGreeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Good evening</Text>
      <View style={styles.greetingsContainer}>
        <GreetingTile />
        <GreetingTile />
        <GreetingTile />
        <GreetingTile />
        <GreetingTile />
        <GreetingTile />
      </View>
    </View>
  );
};

export default HomeGreeting;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  greetingsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
