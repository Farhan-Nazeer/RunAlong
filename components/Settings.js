import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export default function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.settingsBar}>
        <TouchableHighlight
          style={styles.text}
          onPress={() => {
            props.setRunStatus("Not Started");
          }}
        >
          <Text style={styles.innerText}>
            <Icon name="left" size={25} color="white" /> SETTINGS
          </Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.heading}>Select a map mode:</Text>

      <View style={styles.imgContainer}>
        <TouchableHighlight
          style={styles.highlightImage}
          onPress={() => {
            props.setMapStyle("standard");
          }}
        >
          <Image
            style={styles.mapImage}
            source={require("../assets/map_images/standard.png")}
          />
        </TouchableHighlight>
      </View>

      <View style={styles.imgContainer}>
        <TouchableHighlight
          style={styles.highlightImage}
          onPress={() => {
            props.setMapStyle("retro");
          }}
        >
          <Image
            style={styles.mapImage}
            source={require("../assets/map_images/retro.png")}
          />
        </TouchableHighlight>
      </View>

      <View style={styles.imgContainer}>
        <TouchableHighlight
          style={styles.highlightImage}
          onPress={() => {
            props.setMapStyle("dark");
          }}
        >
          <Image
            style={styles.mapImage}
            source={require("../assets/map_images/dark.png")}
          />
        </TouchableHighlight>
      </View>

      <View style={styles.imgContainer}>
        <TouchableHighlight
          style={styles.highlightImage}
          onPress={() => {
            props.setMapStyle("night");
          }}
        >
          <Image
            style={styles.mapImage}
            source={require("../assets/map_images/night.png")}
          />
        </TouchableHighlight>
      </View>

      <View style={styles.imgContainer}>
        <TouchableHighlight
          style={styles.highlightImage}
          onPress={() => {
            props.setMapStyle("aubergine");
          }}
        >
          <Image
            style={styles.mapImage}
            source={require("../assets/map_images/aub.png")}
          />
        </TouchableHighlight>
      </View>

      <Text style={styles.mapStatus}>Current: {props.mapStyle}</Text>
      {/* 
      <Text>Units:</Text>
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
      <Text>Currently in {props.units}.</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    width: 400,
  },
  imgContainer: {
    flex: 240,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 80,
  },
  mapStatus: {
    color: "white",
    paddingRight: 20,
    textAlign: "right",
  },
  settingsBar: {
    flex: 179,
    width: 195,
  },
  mapImage: {
    borderRadius: 10,
    height: 120,
    position: "relative",
    resizeMode: "cover",
    top: 10,
    width: "auto",
  },
  highlightImage: {
    flex: 1,
  },
  text: {
    color: "white",
    flex: 1,
    fontFamily: "sans-serif-medium",
    fontSize: 27,
    fontWeight: "700",
    marginTop: 12,
    paddingLeft: 20,
    textAlign: "left",
  },
  innerText: {
    color: "white",
    flex: 1,
    fontFamily: "sans-serif-medium",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
  },
  heading: {
    color: "white",
    flex: 180,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    textAlign: "left",
    top: 15,
  },
});
