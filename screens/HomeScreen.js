import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  StatusBar,
} from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import scrollViews from "../data/scrollViews.json";
import HomeGreeting from "../components/HomeGreeting";
import RecentPlays from "../components/RecentPlays";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import BigTileScrollView from "../components/BigTileScrollView";

const sections = () => {
  let sections = [];
  scrollViews.splice(2, scrollViews.length - 1).map((section, index) => {
    sections.push(<BigTileScrollView key={index} {...section} />);
  });
  return sections;
};

const HomeScreen = ({ navigation }) => {
  const [scrollY] = useState(new Animated.Value(0));
  const renderSections = sections();
  const insets = useSafeArea();
  const getSettingsOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: "clamp",
      useNativeDriver: true,
    });
  };

  const getSettingsTranslateY = () => {
    return scrollY.interpolate({
      inputRange: [49, 50],
      outputRange: [0, -100],
      extrapolate: "clamp",
      useNativeDriver: true,
    });
  };

  const settingsOpacity = getSettingsOpacity();
  const settingsTranslateY = getSettingsTranslateY();
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="light-content" />
      <Animated.View
        style={[
          styles.settings,
          {
            top: insets.top,
            opacity: settingsOpacity,
            transform: [
              {
                translateY: settingsTranslateY,
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="ios-settings" size={32} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.ScrollView
        style={styles.screenScrollView}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } },
          },
        ])}
      >
        <View
          style={[
            styles.container,
            {
              paddingTop: insets.top * 2.5,
            },
          ]}
        >
          <HomeGreeting />
          <RecentPlays />
          {renderSections}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;

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
