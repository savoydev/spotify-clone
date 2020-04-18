import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchInputScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          style={{
            position: "absolute",
            top: 60,
            left: 20,
          }}
          name="ios-close"
          size={36}
          color="white"
        />
      </TouchableWithoutFeedback>
      <Text style={styles.header}>
        Try saying an artist, song or playlist name.
      </Text>
    </View>
  );
};

export default SearchInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  closeButton: {
    padding: 20,
  },
  header: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 110,
  },
});
