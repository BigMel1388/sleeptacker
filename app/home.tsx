import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef } from "react";

export default function Home() {
    
  const router = useRouter();

  const homeAnim = useRef(new Animated.Value(0)).current;
  const clockAnim = useRef(new Animated.Value(0)).current;
  const planetAnim = useRef(new Animated.Value(0)).current;
  const profileAnim = useRef(new Animated.Value(0)).current;

  function animateIcon(anim: Animated.Value) {
    Animated.sequence([
      Animated.timing(anim, {
        toValue: -10,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(anim, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/high/mixed-media-van-gogh-starry-night-window-uwyzlfcofsupmgw3.webp",
        }}
        style={styles.background}
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

        {/* Bottom Bar */}
        <View style={styles.bottomBar}>

          {/* HOME */}
          <TouchableOpacity
            onPress={() => {
              animateIcon(homeAnim);
              router.push("/home");
            }}
          >
            <Animated.View
              style={[
                styles.homeButton,
                { transform: [{ translateY: homeAnim }] },
              ]}
            >
              <Ionicons name="home" size={24} color="black" />
            </Animated.View>
          </TouchableOpacity>

          {/* CLOCK */}
          <TouchableOpacity
            onPress={() => {
              animateIcon(clockAnim);
              router.push("/clock");
            }}
          >
            <Animated.View style={{ transform: [{ translateY: clockAnim }] }}>
              <Ionicons name="time-outline" size={24} color="white" />
            </Animated.View>
          </TouchableOpacity>

          {/* PLANET */}
          <TouchableOpacity
            onPress={() => {
              animateIcon(planetAnim);
              //router.push("/planet");
            }}
          >
            <Animated.View style={{ transform: [{ translateY: planetAnim }] }}>
              <Ionicons name="planet-outline" size={24} color="white" />
            </Animated.View>
          </TouchableOpacity>

          {/* PROFILE */}
          <TouchableOpacity
            onPress={() => {
              animateIcon(profileAnim);
              //router.push("/profile");
            }}
          >
            <Animated.View style={{ transform: [{ translateY: profileAnim }] }}>
              <Ionicons name="person-outline" size={24} color="white" />
            </Animated.View>
          </TouchableOpacity>

        </View>

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

  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 28,
    height: 90,
    backgroundColor: "#111",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  homeButton: {
    backgroundColor: "#C9A4E7",
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

});