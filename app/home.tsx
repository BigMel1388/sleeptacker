import React, { useEffect } from "react";
import HomeBar from "../components/HomeBar";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";

export default function Home() {
    
  useEffect(() => {
    NavigationBar.setBehaviorAsync("overlay-swipe");
    NavigationBar.setVisibilityAsync("hidden");
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/high/mixed-media-van-gogh-starry-night-window-uwyzlfcofsupmgw3.webp",
        }}
        style={styles.background}
        resizeMode="cover"
      >

        {/* Sleep Text */}
        <View style={styles.centerContent}>
          <Text style={styles.sleepText}>8 Hours left to sleep</Text>

          <Text style={styles.quote}>
            With every breath, Lullaby carries you further from the noise of the
            day and closer to peaceful dreams.
          </Text>

          <Text style={styles.signature}>~Lullaby~</Text>
        </View>

      </ImageBackground>
      <HomeBar />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: "center",
    position: 'relative',
  },

  centerContent: {
    alignItems: "center",
    paddingHorizontal: 40,
  },

  sleepText: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  quote: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 10,
  },

  signature: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
  },

});