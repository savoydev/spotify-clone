import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Animated } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import SearchHeading from "../components/SearchHeading";
import SearchCategoryGroup from "../components/SearchCategoryGroup";

const SearchScreen = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const insets = useSafeArea();

  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="light-content" />
      <Animated.ScrollView
        style={styles.screenScrollView}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } },
          },
        ])}
      >
        <View
          style={{
            paddingTop: insets.top * 1.5,
            backgroundColor: "#000",
            paddingBottom: 10,
            marginBottom: 20,
          }}
        >
          <SearchHeading />
        </View>
        <View style={[styles.container]}>
          <SearchCategoryGroup />
          <SearchCategoryGroup />
          <SearchCategoryGroup />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settings: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
  screenScrollView: {
    flex: 1,
    backgroundColor: "#000",
  },
});
