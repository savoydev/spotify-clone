import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import LibraryScreen from "./screens/LibraryScreen";
import SongsPlaylistScreen from "./screens/SongsPlaylistScreen";
import PodcastsPlaylistScreen from "./screens/PodcastsPlaylistScreen";
import SettingsScreen from "./screens/SettingsScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overShootClamping: false,
    restDisplacementThreshold: 0.01,
    restSoeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();

const StacksNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen
      name="Songs"
      component={SongsPlaylistScreen}
      options={{
        transitionSpec: {
          open: config,
          close: config,
        },
        gestureDirection: "vertical",
      }}
    />
    <Stack.Screen name="Podcasts" component={PodcastsPlaylistScreen} />
  </Stack.Navigator>
);

const SearchStack = createStackNavigator();
const SearchStackNavigator = () => (
  <SearchStack.Navigator headerMode="none" initialRouteName="Search">
    <SearchStack.Screen name="Search" component={SearchScreen} />
  </SearchStack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabsNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: "#fff",
      inactiveTintColor: "#ccc",
      style: {
        backgroundColor: "#333",
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={StacksNavigator}
      options={{
        tabBarIcon: ({ size, color }) => {
          return <Ionicons name="ios-home" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => {
          return <Ionicons name="ios-search" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Library"
      component={LibraryScreen}
      options={{
        tabBarIcon: ({ size, color }) => {
          return <Ionicons name="ios-albums" size={size} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
