import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useLocalSearchParams } from "expo-router";
import HomeBar from "../components/HomeBar";

export default function Profile() {
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/high/mixed-media-van-gogh-starry-night-window-uwyzlfcofsupmgw3.webp",
        }}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Your Profile</Text>

          <View style={styles.card}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.name}>{name || "Guest"}</Text>
          </View>
        </View>

        <HomeBar />
      </ImageBackground>
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

  content: {
    alignItems: "center",
    paddingHorizontal: 40,
  },

  title: {
    fontSize: 30,
    color: "white",
    marginBottom: 40,
  },

  card: {
    width: "80%",
    backgroundColor: "rgba(200,162,255,0.6)",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
  },

  label: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },

  name: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});