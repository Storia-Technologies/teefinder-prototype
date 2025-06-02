import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function StatusBar() {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>19:27</Text>
      </View>
      <View style={styles.indicatorsContainer}>
        <View style={styles.signalContainer}>
          <View style={[styles.signalBar, styles.signalBar1]} />
          <View style={[styles.signalBar, styles.signalBar2]} />
          <View style={[styles.signalBar, styles.signalBar3]} />
          <View style={[styles.signalBar, styles.signalBar4]} />
        </View>
        <View style={styles.wifiIcon} />
        <View style={styles.batteryContainer}>
          <View style={styles.batteryBackground}>
            <View style={styles.batteryLevel} />
          </View>
          <View style={styles.batteryTip} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13.5,
    paddingVertical: 12,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  timeContainer: {
    paddingLeft: 16.5,
  },
  timeText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
    letterSpacing: -0.165,
  },
  indicatorsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  signalContainer: {
    width: 17,
    height: 11,
    position: "relative",
  },
  signalBar: {
    width: 3,
    borderRadius: 1.2,
    position: "absolute",
    backgroundColor: "#000000",
  },
  signalBar1: {
    height: 4,
    left: 0,
    top: 7,
  },
  signalBar2: {
    height: 6,
    left: 4,
    top: 5,
  },
  signalBar3: {
    height: 8,
    left: 8,
    top: 3,
  },
  signalBar4: {
    height: 11,
    left: 12,
    top: 0,
  },
  wifiIcon: {
    width: 15,
    height: 11,
    backgroundColor: "#000000",
  },
  batteryContainer: {
    width: 25,
    height: 12,
    position: "relative",
  },
  batteryBackground: {
    width: 25,
    height: 12,
    backgroundColor: "#000000",
    opacity: 0.4,
    position: "absolute",
    left: 0,
    top: 0,
  },
  batteryLevel: {
    width: 22,
    height: 12,
    backgroundColor: "#DADADA",
    position: "absolute",
    left: 0,
    top: 0,
  },
  batteryTip: {
    width: 18,
    height: 8,
    borderRadius: 1.6,
    backgroundColor: "#000000",
    position: "absolute",
    left: 2,
    top: 2,
  },
});
