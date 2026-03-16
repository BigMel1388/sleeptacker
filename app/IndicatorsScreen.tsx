import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import * as NavigationBar from "expo-navigation-bar";
import HomeBar from "../components/HomeBar";
import { createClient } from "@supabase/supabase-js";

const screenWidth = Dimensions.get("window").width;

/* SUPABASE CLIENT */
const supabase = createClient(
  "https://wjvjxxrgwipmarpwpebp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdmp4eHJnd2lwbWFycHdwZWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NjExNjcsImV4cCI6MjA4OTIzNzE2N30.5z2fmWyVL5X8PImk4fLkn_M5J11YGYlGSMVOzHyqJPM"
);

export default function IndicatorsScreen() {

  const [temperature, setTemperature] = useState<number[]>([]);
  const [humidity, setHumidity] = useState<number[]>([]);
  const [pressure, setPressure] = useState<number[]>([]);
  const [co2, setCo2] = useState<number[]>([]);

  useEffect(() => {

    NavigationBar.setBehaviorAsync("overlay-swipe");
    NavigationBar.setVisibilityAsync("hidden");

    const loadData = async () => {

      const { data, error } = await supabase
        .from("sensor_data")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);

      if (!error && data) {

        const reversed = data.reverse();

        setTemperature(reversed.map(d => d.temperature));
        setHumidity(reversed.map(d => d.humidity));
        setPressure(reversed.map(d => d.pressure));
        setCo2(reversed.map(d => d.co2));

      }

    };

    loadData();

    const interval = setInterval(loadData, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <ImageBackground
      source={{
        uri: "https://wallpapers.com/images/high/mixed-media-van-gogh-starry-night-window-uwyzlfcofsupmgw3.webp",
      }}
      resizeMode="cover"
      style={styles.background}
    >

      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>Indicators</Text>

        {/* Temperature */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Temperature</Text>
          <LineChart
            data={{
              labels: ["1","2","3","4","5","6"].slice(-temperature.length),
              datasets: [{ data: temperature.length ? temperature : [0] }],
            }}
            width={screenWidth - 80}
            height={150}
            withDots={false}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              color: () => "#7CC4C2",
              labelColor: () => "#555",
            }}
            style={styles.chart}
          />
        </View>

        {/* Humidity */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Humidity</Text>
          <LineChart
            data={{
              labels: ["1","2","3","4","5","6"].slice(-humidity.length),
              datasets: [{ data: humidity.length ? humidity : [0] }],
            }}
            width={screenWidth - 80}
            height={150}
            withDots={false}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              color: () => "#FF6B6B",
              labelColor: () => "#555",
            }}
            style={styles.chart}
          />
        </View>

        {/* Pressure */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pressure</Text>
          <LineChart
            data={{
              labels: ["1","2","3","4","5","6"].slice(-pressure.length),
              datasets: [{ data: pressure.length ? pressure : [0] }],
            }}
            width={screenWidth - 80}
            height={150}
            withDots={false}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              color: () => "#4ECDC4",
              labelColor: () => "#555",
            }}
            style={styles.chart}
          />
        </View>

        {/* CO2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>CO₂ level</Text>
          <LineChart
            data={{
              labels: ["1","2","3","4","5","6"].slice(-co2.length),
              datasets: [{ data: co2.length ? co2 : [0] }],
            }}
            width={screenWidth - 80}
            height={150}
            withDots={false}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              color: () => "#8A78D6",
              labelColor: () => "#555",
            }}
            style={styles.chart}
          />
        </View>

      </ScrollView>

      <HomeBar />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },

  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  title: {
    fontSize: 38,
    fontWeight: "700",
    color: "white",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 18,
    padding: 15,
    marginBottom: 25,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  chart: {
    borderRadius: 16,
  },
});