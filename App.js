import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform, Text, SafeAreaView, StyleSheet } from "react-native";
import * as Location from "expo-location";

import MapOnScreen from "./components/Run";
import Home from "./components/Home";
import End from "./components/End";
import Settings from "./components/Settings";
import Loading from "./components/Loading";

export default function App() {
  const [units, setUnits] = useState("km");

  const [latitudeValue, setLatitudeValue] = useState(null);
  const [longitudeValue, setLongitudeValue] = useState(null);

  const [coordinatesArray, setCoordinatesArray] = useState([]);

  const [distanceTravelled, setDistanceTravelled] = useState(0);

  const [appStatus, setStatus] = useState("Not Started");
  const [runDuration, setRunDuration] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {appStatus == "Not Started" && <Home setRunStatus={setStatus} />}
      {appStatus == "Loading" && (
        <Loading 
          setRunStatus={setStatus} 
          setLat={setLatitudeValue} 
          setLong={setLongitudeValue}
          lat={latitudeValue}
          long={longitudeValue}
          setCordsArr={setCoordinatesArray}/>
      )}
      {appStatus == "Started" && (
        <MapOnScreen
          lat={latitudeValue}
          long={longitudeValue}
          setLat={setLatitudeValue}
          setLong={setLongitudeValue}
          cordsArr={coordinatesArray}
          setCordsArr={setCoordinatesArray}
          totalDistance={distanceTravelled}
          setTotalDistance={setDistanceTravelled}
          runTime={runDuration}
          setRunTime={setRunDuration}
          setRunStatus={setStatus}
          units={units}
        />
      )}
      {appStatus == "Ended" && (
        <End
          setRunStatus={setStatus}
          runTime={runDuration}
          setRunTime={setRunDuration}
          totalDistance={distanceTravelled}
          setTotalDistance={setDistanceTravelled}
          setCordsArr={setCoordinatesArray}
          setLat={setLatitudeValue}
          setLong={setLongitudeValue}
          units={units}
        />
      )}
      {appStatus == "Settings" && (
        <Settings setRunStatus={setStatus} setUnits={setUnits} units={units} />
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
