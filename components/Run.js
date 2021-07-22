//import * as React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions } from "react-native";
import * as Location from "expo-location";

const DEGREES_TO_METERS = 111139;

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

// function calcDistanceTravelled(coordinates, ){
//   let distance = 0
//   for (let i = 0; i < coordinates.length - 1; i++) {
//     xDistance = coordinates[i].latitude - coordinates[i+1].latitude
//     yDistance = coordinates[i].longitude - coordinates[i+1].longitude
//     distance += Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
//   }
//   return distance
// }

function calcDistanceTravelled(coordinates) {
  let distanceChange = 0;
  xDistance = coordinates[0].latitude - coordinates[1].latitude;
  yDistance = coordinates[0].longitude - coordinates[1].longitude;
  distanceChange += Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  return distanceChange * DEGREES_TO_METERS;
}

export default function MapOnScreen({
  lat,
  long,
  setLat,
  setLong,
  cordsArr,
  setCordsArr,
  totalDistance,
  setTotalDistance,
  runTime,
  setRunTime,
}) {
  const mapRef = React.createRef();
  const [positionChanged, setPositionChanged] = useState(null);
  const [coordinatesUpdated, setCoordinatesUpdated] = useState(null);

  onNewPosition = (location) => {
    setLat(location.coords.latitude);
    setLong(location.coords.longitude);
    setPositionChanged(true);
  };

  updateCordinates = () => {
    setCordsArr((cordsArr) => [
      ...cordsArr,
      { latitude: lat, longitude: long },
    ]);
    setCoordinatesUpdated(true);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRunTime((runTime) => runTime + 1);
    }, 1000);

    (async () => {
      const options = {
        enableHighAccuracy: true,
        timeInterval: 1000,
        distanceInterval: 1,
      };
      watcher = await Location.watchPositionAsync(options, onNewPosition);
      // Try to reverse order of distance and position changed if cant calc distance properly
      if (coordinatesUpdated) {
        newDistance = totalDistance + calcDistanceTravelled(cordsArr.slice(-2));
        setTotalDistance(newDistance); //Maybe make this own function to match other "set" calls
        setCoordinatesUpdated(false);
      }
      if (positionChanged) {
        changePosition(lat, long, mapRef);
        updateCordinates();
        setPositionChanged(false);
      }

      console.log(lat, long, totalDistance);
    })();
    return () => {
      clearInterval(intervalID);
    };
  }, [positionChanged, coordinatesUpdated]);

  // function componentWillUnmount() {
  //   watcher.remove();
  // }
  // console.log("outside", lat, long);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{ latitude: lat, longitude: long }}
          pinColor={"red"}
          title={"title"}
          description={"description"}
        />
        <Polyline
          coordinates={cordsArr}
          lineDashPattern={[1]}
          lineCap="butt"
          strokeColor="purple"
          strokeWidth={6}
        />
      </MapView>
      <Text>{new Date(runTime * 1000).toISOString().substr(11, 8)}</Text>
    </SafeAreaView>
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
