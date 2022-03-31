import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Run Along</Text>
      <TouchableHighlight
        onPress={() => {
          props.setRunStatus("Loading");
          props.setMovementOption("Running");
        }}
      >
        <View style={styles.circle}>
          <View style={styles.radius}></View>
          <View style={styles.circle2}>
            <View style={styles.radius2}></View>
            <View style={styles.circle3}>
              <View style={styles.radius3}></View>
              <View style={styles.circle4}>
                <Text style={styles.runText}>GO</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.settings}>
        <TouchableHighlight
          onPress={() => {
            props.setRunStatus("Settings");
          }}
        >
          <Image style={styles.gear} source={require("../assets/gear.png")} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
  },
  settings: {
    paddingTop: 50,
  },
  circle: {
    alignItems: "center",
    backgroundColor: "#137B70",
    borderRadius: 296 / 2,
    height: 296,
    justifyContent: "center",
    width: 296,
  },
  circle2: {
    alignItems: "center",
    backgroundColor: "#5DA31C",
    borderColor: "#AAD0CB",
    borderRadius: 236 / 2,
    borderWidth: 1,
    height: 236,
    justifyContent: "center",
    width: 236,
  },
  circle3: {
    alignItems: "center",
    backgroundColor: "#E39D07",
    borderColor: "#F7BA36",
    borderRadius: 180 / 2,
    borderWidth: 1,
    height: 180,
    justifyContent: "center",
    width: 180,
  },
  circle4: {
    alignItems: "center",
    backgroundColor: "#EE2457",
    borderColor: "#F1CC7E",
    borderRadius: 130 / 2,
    borderWidth: 1,
    height: 130,
    justifyContent: "center",
    width: 130,
  },
  runText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  radius: {
    backgroundColor: "#89EEE5",
    borderColor: "#137B70",
    borderWidth: 1,
    left: "50%",
    height: 3,
    position: "absolute",
    top: "50%",
    transform: [
      { translateX: -1 * (296 / 4) },
      { rotate: "45deg" },
      { translateX: 1 * (296 / 4) - 1 },
    ],
    width: "50%",
  },
  radius2: {
    backgroundColor: "#A6EB64",
    borderColor: "#5DA31C",
    borderWidth: 1,
    height: 3,
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: [
      { translateX: -1 * (236 / 4) },
      { rotate: "37.5deg" },
      { translateX: 1 * (236 / 4) - 1 },
    ],
    width: "50%",
  },
  radius3: {
    backgroundColor: "#FFB923",
    borderColor: "#FFB923",
    borderWidth: 1,
    height: 3,
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: [
      { translateX: -1 * (180 / 4) },
      { rotate: "30deg" },
      { translateX: 1 * (180 / 4) - 1 },
    ],
    width: "50%",
  },
  gear: {
    height: 44,
    width: 44,
  },
  title: {
    color: "white",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    fontWeight: "700",
    marginRight: 78,
    marginLeft: 79,
    paddingBottom: 40,
    paddingTop: 150,
  },
});
