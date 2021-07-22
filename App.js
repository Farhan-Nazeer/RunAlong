import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, Text, SafeAreaView, StyleSheet } from "react-native";
import * as Location from "expo-location";

import MapOnScreen from "./components/Run";
import Home from "./components/Home";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  //TODO: figure out actual intial states for lat long
  const [latitudeValue, setLatitudeValue] = useState(4);
  const [longitudeValue, setLongitudeValue] = useState(4);

  const [cordinatesArray, setCordinatesArray] = useState([
    { latitude: 4, longitude: 4 },
  ]);

  const [distanceTravelled, setDistanceTravelled] = useState(0);

  const [runStarted, setRunStarted] = useState(null);
  const [runDuration, setRunDuration] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(location);
      setLatitudeValue(location.coords.latitude);
      setLongitudeValue(location.coords.longitude);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={styles.container}>
      {!runStarted && <Home setStarted={setRunStarted} />}
      {runStarted && (
        <MapOnScreen
          lat={latitudeValue}
          long={longitudeValue}
          setLat={setLatitudeValue}
          setLong={setLongitudeValue}
          cordsArr={cordinatesArray}
          setCordsArr={setCordinatesArray}
          totalDistance={distanceTravelled}
          setTotalDistance={setDistanceTravelled}
          runTime={runDuration}
          setRunTime={setRunDuration}
        />
      )}
      {/* <Text>{text}</Text> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
});
