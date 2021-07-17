//import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";

function changePosition(lat, long, mapRef) {
  if (mapRef.current) {
    mapRef.current.animateToRegion(
      {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      },
      1000
    );
  }
}

export default function MapOnScreen({ lat, long, setLat, setLong }) {
  const mapRef = React.createRef();
  const [positionChanged, setPositionChanged] = useState(null);
  onNewPosition = (location) => {
    setLat(location.coords.latitude);
    setLong(location.coords.longitude);
    setPositionChanged(true);
  };

  useEffect(() => {
    (async () => {
      const options = {
        enableHighAccuracy: true,
        timeInterval: 1000,
        distanceInterval: 1,
      };
      watcher = await Location.watchPositionAsync(options, onNewPosition);
      if (positionChanged) {
        changePosition(lat, long, mapRef);
        setPositionChanged(false);
      }

      console.log(lat, long);
    })();
  }, [positionChanged]);

  function componentWillUnmount() {
    watcher.remove();
  }
  // console.log("outside", lat, long);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        // showsUserLocation={true}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // provider={PROVIDER_GOOGLE}
        provider="google"
      >
        <Marker
          coordinate={{ latitude: lat, longitude: long }}
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
