import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

const DEFAULT_POSITION = 4;

export default function End({
  setRunStatus,
  runTime,
  setRunTime,
  totalDistance,
  setTotalDistance,
  setCordsArr,
  setLat,
  setLong,
}) {
  return (
    <View style={styles.container}>
      <Text>
        Time Ran: {new Date(runTime * 1000).toISOString().substr(11, 8)}
      </Text>
      <Text>Distance Ran: {totalDistance.toFixed(2)}</Text>
      <Text>
        Average Speed: {((totalDistance / runTime) * 3.6).toFixed(2)} km/h
      </Text>
      {/*TODO: - Maybe make speed a state variable
               - Also try adding commas to numbers displayed*/}
      <Button
        title="Return Home"
        onPress={() => {
          setRunTime(0);
          setRunStatus("Not Started");
          setTotalDistance(0);
          setCordsArr([
            { latitude: DEFAULT_POSITION, longitude: DEFAULT_POSITION },
          ]);
          setLat(DEFAULT_POSITION);
          setLong(DEFAULT_POSITION);
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
  },
});
