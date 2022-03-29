import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button, TouchableHighlight, Image } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Run Along</Text>
      <TouchableHighlight onPress={() => {
          props.setRunStatus("Loading");
          props.setMovementOption("Running");
        }}>
        <View style={styles.circle}>
          <View style={styles.radius}></View>
            <View style={styles.circle2} >
            <View style={styles.radius2}></View>
              <View style={styles.circle3} >
              <View style={styles.radius3}></View>
              <View style={styles.circle4} >
                <Text style={styles.runText}>GO</Text>
                </View>
                </View>
              </View>
        </View>
      </TouchableHighlight>
      <View style={styles.settings}>
        <TouchableHighlight onPress={() => {
            props.setRunStatus("Settings");
          }}>
          <Image style={styles.gear} source={require('../assets/gear.png')} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161A17",
    alignItems: "center",
  },
  settings: {
    paddingTop: 50,
  },
  circle: {
    width: 296,
    height: 296,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 296 / 2,
    backgroundColor: '#137B70',
  },
  circle2: {
    width: 236,
    height: 236,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 236 / 2,
    backgroundColor: '#5DA31C',
    borderColor: "#AAD0CB",
    borderWidth: 1,
  },
  circle3: {
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 180 / 2,
    backgroundColor: '#E39D07',
    borderColor: "#F7BA36",
    borderWidth: 1
  },
  circle4: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 130 / 2,
    backgroundColor: '#EE2457',
    borderColor: "#F1CC7E",
    borderWidth: 1
  },
  runText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  radius: {
    position: "absolute",
    width: "50%",
    height: 3,
    left: "50%",
    top: "50%",
    backgroundColor: "#89EEE5",
    borderColor: "#137B70",
    borderWidth: 1,
    transform: [{translateX: -1 * (296 / 4)}, { rotate: '45deg'}, {translateX: 1 * (296 / 4) - 1}]
  },
  radius2: {
    position: "absolute",
    width: "50%",
    height: 3,
    left: "50%",
    top: "50%",
    backgroundColor: "#A6EB64",
    borderColor: "#5DA31C",
    borderWidth: 1,
    transform: [{translateX: -1 * (236 / 4)}, { rotate: '37.5deg'}, {translateX: 1 * (236 / 4) - 1}]
  },
  radius3: {
    position: "absolute",
    width: "50%",
    height: 3,
    left: "50%",
    top: "50%",
    backgroundColor: "#FFB923",
    borderColor: "#FFB923",
    borderWidth: 1,
    transform: [{translateX: -1 * (180 / 4)}, { rotate: '30deg'}, {translateX: 1 * (180 / 4) - 1}]
  },
  gear: {
    width: 44,
    height: 44,
  },
  title: {
    fontSize: 50,
    paddingBottom: 40,
    paddingTop: 150,
    color: "white"
  }
});
