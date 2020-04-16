import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SongPlaylistBackground from "../components/SongPlaylistBackground";
import SongPlaylistContainer from "../components/SongPlaylistContainer";
import { useSafeArea } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const SongsPlaylistScreen = ({ route, navigation }) => {
  const inset = useSafeArea();
  const { atist, song } = route.params;
  const [scrollY] = useState(new Animated.Value(0));
  const getScale = () => {
    return scrollY.interpolate({
      inputRange: [10, 280],
      outputRange: [1, 0.5],
      extrapolate: "clamp",
      useNativeDriver: true,
    });
  };
  const getOpacity = () => {
    return scrollY.interpolate({
      inputRange: [10, 200],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
  };
  const getHeaderOpacity = () => {
    return scrollY.interpolate({
      inputRange: [200, 290],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
  };
  const getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [310, 330],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
  };
  const getTitleTranslateY = () => {
    return scrollY.interpolate({
      inputRange: [310, 330],
      outputRange: [10, 0],
      extrapolate: "clamp",
    });
  };

  const goBackAPage = navigation.goBack;
  const scaleAnimate = getScale();
  const scaleOpacity = getOpacity();
  const headerOpacity = getHeaderOpacity();
  const titleOpacity = getTitleOpacity();
  const titleTranslateY = getTitleTranslateY();
  return (
    <View style={styles.container}>
      {/* <View
        style={[
          styles.bgContainer,
          {
            top: inset.top,
          },
        ]}
      >
        
      </View> */}
      <Animated.View
        style={[
          styles.playlistBackground,
          {
            top: inset.top * 2,
            transform: [
              {
                scale: scaleAnimate,
              },
            ],
            opacity: scaleOpacity,
          },
        ]}
      ></Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } },
          },
        ])}
      >
        <SongPlaylistContainer />
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          {
            paddingTop: inset.top,
            opacity: headerOpacity,
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.hiddenTitle,
            {
              opacity: titleOpacity,
              transform: [
                {
                  translateY: titleTranslateY,
                },
              ],
            },
          ]}
        >
          Please Excuse Me For Being Antisocial
        </Animated.Text>
      </Animated.View>
      <TouchableWithoutFeedback onPress={goBackAPage}>
        <Ionicons
          style={[
            styles.backButton,
            {
              top: inset.top,
            },
          ]}
          name="ios-arrow-back"
          color="#fff"
          size={24}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SongsPlaylistScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  // bgContainer: {
  //   justifyContent: "flex-start",
  //   alignItems: "center",

  //   bottom: 0,
  //   width: "100%",
  // },
  playlistBackground: {
    position: "absolute",
    height: 280,
    width: 280,
    top: 50,
    left: 70,
    backgroundColor: "lightblue",
  },
  header: {
    position: "absolute",
    backgroundColor: "#333",
    top: 0,
    flexDirection: "row",
    justifyContent: "center",
    left: 0,
    right: 0,
    paddingBottom: 10,
  },
  hiddenTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 28,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 0,
  },
});
