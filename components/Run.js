//import * as React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";
import * as Location from "expo-location";
/*TODO:
  - Figure out why marker updates but polyline and animate to region dont work on second run of app on Farhan's phone
  - Polyline and animate to region both end up updating, but a lot after the marker and they update together. Figure out
  how to make this update faster
  - Check if first position found in App.js stays as first point in Run.js as well (If it does, we need to get the current 
    position somewhere else, maybe Loading.js)
  - Make the map zoom bigger so that you see less of your surroundings
*/
const DEGREES_TO_METERS = 111139;

function calcDistanceTravelled(coordinates) {
  let distanceChange = 0;
  xDistance = coordinates[0].latitude - coordinates[1].latitude;
  yDistance = coordinates[0].longitude - coordinates[1].longitude;
  distanceChange += Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  return (distanceChange * DEGREES_TO_METERS) / 1000; // Need to display in kilometers
}

export default function MapOnScreen({
  lat,
  long,
  units,
  setLat,
  setLong,
  cordsArr,
  setCordsArr,
  totalDistance,
  setTotalDistance,
  runTime,
  setRunTime,
  setRunStatus,
}) {
  const mapRef = React.useRef(null);
  const [positionChanged, setPositionChanged] = useState(false);
  const [coordinatesUpdated, setCoordinatesUpdated] = useState(false);

  changePosition = () => {
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
  };

  onNewPosition = (location) => {
    console.log("position changed");
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
        //accuracy: Location.Accuracy.Low,
        timeInterval: 10,
        distanceInterval: 1, //can be 1 or 0
      };
      watcher = await Location.watchPositionAsync(options, onNewPosition);
      // Try to reverse order of distance and position changed if cant calc distance properly
      if (coordinatesUpdated) {
        newDistance = totalDistance + calcDistanceTravelled(cordsArr.slice(-2));
        setTotalDistance(newDistance); //Maybe make this own function to match other "set" calls
        setCoordinatesUpdated(false);
      }
      if (positionChanged) {
        changePosition();
        updateCordinates();
        setPositionChanged(false);
      }

      console.log(lat, long, totalDistance);
    })();
    return () => {
      clearInterval(intervalID);
      watcher.remove();
    };
  }, [positionChanged, coordinatesUpdated]);

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
        />
        <Polyline
          coordinates={cordsArr}
          lineDashPattern={[1]}
          lineCap="butt"
          strokeColor="purple"
          strokeWidth={6}
        />
      </MapView>
      <Text>{new Date(runTime * 1000).toISOString().substr(11, 8)} </Text>
      <Text>
        Distance Ran:{" "}
        {units == "km"
          ? totalDistance.toFixed(2)
          : (totalDistance * 0.621371).toFixed(2)}{" "}
        {units}
      </Text>
      <Button
        style={styles.endButton}
        title="End"
        onPress={() => {
          setRunStatus("Ended");
        }}
      />
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
  endButton: {
    zIndex: 1,
  },
});
