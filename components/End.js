import React, { useState, useEffect } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

const mapStyles = require("../assets/map_styles");

export default function End(props) {
  const mapStyleEnd = props.mapStyle == "standard" ? null : mapStyles[props.mapStyle];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyleEnd}
        initialRegion={{
          latitude: props.cordsArr[Math.floor(props.cordsArr.length / 2)].latitude,
          longitude: props.cordsArr[Math.floor(props.cordsArr.length / 2)].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: props.cordsArr[props.cordsArr.length - 1].latitude,
            longitude: props.cordsArr[props.cordsArr.length - 1].longitude,
          }}
          pinColor={"red"}
        />
        <Polyline
          coordinates={props.cordsArr}
          lineDashPattern={[1]}
          lineCap="butt"
          strokeColor="purple"
          strokeWidth={6}
        />
      </MapView>
      <Text>Time: {new Date(props.runTime * 1000).toISOString().substr(11, 8)}</Text>
      {props.movementOption == "Walking" && (
        <Text>Number of Steps: {props.stepsWalked}</Text>
      )}
      <Text>
        Distance:{" "}
        {props.units == "km"
          ? props.totalDistance.toFixed(2)
          : (props.totalDistance * 0.621371).toFixed(2)}{" "}
        {props.units}
      </Text>
      {props.movementOption == "Running" && (
        <Text>
          Average Speed:{" "}
          {props.units == "km"
            ? ((props.totalDistance / props.runTime) * 3600).toFixed(2)
            : (((props.totalDistance * 0.621371) / props.runTime) * 3600).toFixed(2)}{" "}
          {props.units}/h
        </Text>
      )}

      <Button
        title="Return Home"
        onPress={() => {
          props.setRunTime(0);
          props.setRunStatus("Not Started");
          props.setTotalDistance(0);
          props.setCordsArr([]);
          props.setLat(null);
          props.setLong(null);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    paddingBottom: 30,
  },
  map: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});
