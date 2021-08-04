import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, Text, SafeAreaView, StyleSheet } from "react-native";
import * as Location from "expo-location";

import MapOnScreen from "./components/Run";
import Home from "./components/Home";
import End from "./components/End";

const DEFAULT_POSITION = 4;

export default function App() {
  //TODO: figure out actual intial states for lat long
  const [latitudeValue, setLatitudeValue] = useState(DEFAULT_POSITION);
  const [longitudeValue, setLongitudeValue] = useState(DEFAULT_POSITION);

  const [cordinatesArray, setCordinatesArray] = useState([
    { latitude: DEFAULT_POSITION, longitude: DEFAULT_POSITION },
  ]);

  const [distanceTravelled, setDistanceTravelled] = useState(0);

  const [status, setStatus] = useState("Not Started");
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
      setLatitudeValue(location.coords.latitude);
      setLongitudeValue(location.coords.longitude);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {status == "Not Started" && <Home setRunStatus={setStatus} />}
      {status == "Started" && (
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
          setRunStatus={setStatus}
        />
      )}
      {/* <Text>{text}</Text> */}
      {status == "Ended" && (
        <End
          setRunStatus={setStatus}
          runTime={runDuration}
          setRunTime={setRunDuration}
          totalDistance={distanceTravelled}
          setTotalDistance={setDistanceTravelled}
          setCordsArr={setCordinatesArray}
          setLat={setLatitudeValue}
          setLong={setLongitudeValue}
        />
      )}
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
