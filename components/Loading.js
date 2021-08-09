import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import * as Location from "expo-location";

export default function Loading({ setRunStatus, setLat, setLong, lat, long, setCordsArr}) {

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
      if (lat && long){
        setRunStatus("Started");
        setCordsArr([{ latitude: lat, longitude: long }]); //This is needed for polyline and animateToRegion to work on map for some reason
      }
    })();
  }, [lat, long]);
  
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
