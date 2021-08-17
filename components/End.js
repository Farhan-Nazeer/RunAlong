import React, { useState, useEffect } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

const mapStyles = require('../assets/map_styles');

//const DEFAULT_POSITION = 4;

export default function End({
  setRunStatus,
  runTime,
  setRunTime,
  totalDistance,
  setTotalDistance,
  setCordsArr,
  cordsArr,
  setLat,
  setLong,
  units,
  mapStyle
}) {
  const mapStyleEnd = mapStyle == "standard" ? null : mapStyles[mapStyle];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyleEnd}
        initialRegion={{
          latitude: cordsArr[Math.floor(cordsArr.length/2)].latitude,
          longitude: cordsArr[Math.floor(cordsArr.length/2)].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{ latitude: cordsArr[cordsArr.length-1].latitude, longitude: cordsArr[cordsArr.length-1].longitude }}
          pinColor={"red"}
        />
        <Polyline
          coordinates={cordsArr}
          lineDashPattern={[1]}
          lineCap="butt"
          strokeColor="purple"
          strokeWidth={6}
        />
      </MapView>
      <Text>
        Time Ran: {new Date(runTime * 1000).toISOString().substr(11, 8)}
      </Text>
      <Text>
        Distance Ran:{" "}
        {units == "km"
          ? totalDistance.toFixed(2)
          : (totalDistance * 0.621371).toFixed(2)}{" "}
        {units}
      </Text>
      <Text>
        Average Speed:{" "}
        {units == "km"
          ? ((totalDistance / runTime) * 3600).toFixed(2)
          : (((totalDistance * 0.621371) / runTime) * 3600).toFixed(2)}{" "}
        {units}/h
      </Text>
      {/*TODO: - Maybe make speed a state variable
               - Also try adding commas to numbers displayed*/}
      <Button
        title="Return Home"
        onPress={() => {
          setRunTime(0);
          setRunStatus("Not Started");
          setTotalDistance(0);
          setCordsArr([]);
          setLat(null);
          setLong(null);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
