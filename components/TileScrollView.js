import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MusicTile from "./MusicTile";
import { useNavigation } from "@react-navigation/native";

const TileScrollView = ({ heading, songs, viewHeight }) => {
  const navigation = useNavigation();
  const tilePress = (song) => {
    navigation.navigate("Songs", { ...song });
  };

  const renderSongs = () => {
    if (!songs) return;
    let songsToRender = [];
    songs.map((song, index) => {
      songsToRender.push(
        <TouchableOpacity key={index} onPress={() => tilePress(song)}>
          <MusicTile viewHeight={viewHeight} {...song} />
        </TouchableOpacity>
      );
    });
    return songsToRender;
  };
  return (
    <View style={[styles.container]}>
      <Text style={styles.heading}>{heading}</Text>
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        style={styles.tileScrollView}
      >
        {renderSongs()}
      </ScrollView>
    </View>
  );
};

export default TileScrollView;

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  tileScrollView: {},
  contentContainer: {
    // alignItems: "center",
  },
  heading: {
    marginLeft: 20,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
