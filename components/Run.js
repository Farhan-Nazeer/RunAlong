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
import { Pedometer } from "expo-sensors";

const mapStyles = require("../assets/map_styles");

const DEGREES_TO_METERS = 111139;

const calcDistanceTravelled = (coordinates) => {
  let distanceChange = 0;
  xDistance = coordinates[0].latitude - coordinates[1].latitude;
  yDistance = coordinates[0].longitude - coordinates[1].longitude;
  distanceChange += Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  return (distanceChange * DEGREES_TO_METERS) / 1000;
}

export default function MapOnScreen(props) {
  const mapStyleRun = props.mapStyle == "standard" ? null : mapStyles[props.mapStyle];
  const mapRef = React.useRef(null);
  const [positionChanged, setPositionChanged] = useState(false);
  const [coordinatesUpdated, setCoordinatesUpdated] = useState(false);
  const [pedAvailable, setPedAvailable] = useState(false);

  changePosition = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: props.lat,
          longitude: props.long,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        },
        1000
      );
    }
  };

  onNewPosition = (location) => {
    console.log("position changed");
    props.setLat(location.coords.latitude);
    props.setLong(location.coords.longitude);
    setPositionChanged(true);
  };

  updateCordinates = () => {
    props.setCordsArr((cordsArr) => [
      ...cordsArr,
      { latitude: props.lat, longitude: props.long },
    ]);
    setCoordinatesUpdated(true);
  };

  useEffect(() => {
    this._subscription = Pedometer.watchStepCount((result) => {
      props.setStepsWalked(1);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedAvailable(String(result));
      },
      (error) => {
        setPedAvailable("Not available");
      }
    );

    const intervalID = setInterval(() => {
      props.setRunTime((runTime) => runTime + 1);
    }, 1000);

    (async () => {
      const options = {
        enableHighAccuracy: true,
        timeInterval: 10,
        distanceInterval: 1, 
      };
      watcher = await Location.watchPositionAsync(options, onNewPosition);
      if (coordinatesUpdated) {
        newDistance = props.totalDistance + calcDistanceTravelled(cordsArr.slice(-2));
        props.setTotalDistance(newDistance);
        setCoordinatesUpdated(false);
      }
      if (positionChanged) {
        changePosition();
        updateCordinates();
        setPositionChanged(false);
      }

      console.log(props.lat, props.long, props.totalDistance);
    })();
    return () => {
      clearInterval(intervalID);
      watcher.remove();
      this._subscription && this._subscription.remove();
      this._subscription = null;
    };
  }, [positionChanged, coordinatesUpdated]);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        customMapStyle={mapStyleRun}
        initialRegion={{
          latitude: props.lat,
          longitude: props.long,
          latitudeDelta: 0.0922 * 0.5,
          longitudeDelta: 0.0421 * 0.5,
        }}
        provider="google"
      >
        <Marker
          coordinate={{ latitude: props.lat, longitude: props.long }}
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
      <Text>{new Date(props.runTime * 1000).toISOString().substr(11, 8)} </Text>
      {props.movementOption == "Walking" && (
        <Text>
          Number of Steps: {props.stepsWalked} {pedAvailable}
        </Text>
      )}
      <Text>
        Distance:{" "}
        {props.units == "km"
          ? props.totalDistance.toFixed(2)
          : (props.totalDistance * 0.621371).toFixed(2)}{" "}
        {props.units}
      </Text>
      <Button
        style={styles.endButton}
        title="End"
        onPress={() => {
          props.setRunStatus("Ended");
        }}
      />
    </SafeAreaView>
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
  endButton: {
    zIndex: 1,
  },
});
