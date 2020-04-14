import React from "react";
import { StyleSheet, Text, View, StatusBar, Animated } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

const DefaultScreen = ({ children }) => {
  const [scrollY] = useState(new Animated.Value(0));
  return (
    <>
      <StatusBar barStyle="light-content" />
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
          {children}
        </View>
      </Animated.ScrollView>
    </>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenScrollView: {
    flex: 1,
    backgroundColor: "#000",
  },
});
