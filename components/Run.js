//import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";

export default function MapOnScreen(props) {
  const mapRef = React.createRef();
  //TODO: look into animateCamera
  onNewPosition = () => {
    console.log("called");
    //TODO: Replace hard coded values with actual variable
    mapRef.current.animateToRegion(
      {
        latitude: 37.4219983,
        longitude: -122.084,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      },
      1000
    );
  };

  useEffect(() => {
    (async () => {
      console.log("here");
      const options = {
        enableHighAccuracy: true,
        timeInterval: 1000,
        distanceInterval: 1,
      };
      watcher = await Location.watchPositionAsync(
        options,
        onNewPosition,
        mapRef
      );
    })();
  }, []);

  function componentWillUnmount() {
    watcher.remove();
  }
  console.log(props.lat, props.long);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: props.lat,
          longitude: props.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{ latitude: props.lat, longitude: props.long }}
          pinColor={"red"}
          title={"title"}
          description={"description"}
        />
      </MapView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
