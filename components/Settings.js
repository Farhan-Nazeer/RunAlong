import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Image,
  TouchableHighlight,
} from "react-native";

export default function Settings(props) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          props.setMapStyle("standard");
        }}
      >
        <Image
          style={styles.mapImages}
          source={require("../assets/map_images/standard.png")}
        />
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          props.setMapStyle("retro");
        }}
      >
        <Image
          style={styles.mapImages}
          source={require("../assets/map_images/retro.png")}
        />
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          props.setMapStyle("dark");
        }}
      >
        <Image
          style={styles.mapImages}
          source={require("../assets/map_images/dark.png")}
        />
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          props.setMapStyle("night");
        }}
      >
        <Image
          style={styles.mapImages}
          source={require("../assets/map_images/night.png")}
        />
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          props.setMapStyle("aubergine");
        }}
      >
        <Image
          style={styles.mapImages}
          source={require("../assets/map_images/aub.png")}
        />
      </TouchableHighlight>

      <Button
        title="Metric"
        onPress={() => {
          props.setUnits("km");
        }}
      />
      <Button
        title="Imperial"
        onPress={() => {
          props.setUnits("mi");
        }}
      />
      <Text>Currently in {props.units}.</Text>
      <Text>Current map theme is {props.mapStyle}.</Text>
      <Button
        title="Return Home"
        onPress={() => {
          props.setRunStatus("Not Started");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
    width: 400,
  },
  mapImages: {
    width: 350,
    height: 120,
    borderRadius: 10,
    resizeMode: "contain",
    marginTop: 12,
  },
});
