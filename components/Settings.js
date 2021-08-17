import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

export default function Settings({ setRunStatus, setUnits, units, mapStyle, setMapStyle }) {
  return (
    <View style={styles.container}>
      <Button
        title="Metric"
        onPress={() => {
          setUnits("km");
        }}
      />
      <Button
        title="Imperial"
        onPress={() => {
          setUnits("mi");
        }}
      />
      <Text>Currently in {units}.</Text>
      <Button
        title="Standard"
        onPress={() => {
          setMapStyle("standard");
        }}
      />
      <Button
        title="Retro"
        onPress={() => {
          setMapStyle("retro");
        }}
      />
      <Button
        title="Dark"
        onPress={() => {
          setMapStyle("dark");
        }}
      />
      <Button
        title="Night"
        onPress={() => {
          setMapStyle("night");
        }}
      />
      <Button
        title="Aubergine"
        onPress={() => {
          setMapStyle("aubergine");
        }}
      />
      <Text>Current map theme is {mapStyle}.</Text>
      <Button
        title="Return Home"
        onPress={() => {
          setRunStatus("Not Started");
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
