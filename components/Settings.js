import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

export default function Settings(props) {
  return (
    <View style={styles.container}>
      <Button
        title="Metric"
        onPress={() => {
          props.setUnits("km");
        }}
      />
      <Button
        title="Imperial"
        onPress={() => {
          props.setUnits("mi");
        }}
      />
      <Text>Currently in {props.units}.</Text>
      <Button
        title="Standard"
        onPress={() => {
          props.setMapStyle("standard");
        }}
      />
      <Button
        title="Retro"
        onPress={() => {
          props.setMapStyle("retro");
        }}
      />
      <Button
        title="Dark"
        onPress={() => {
          props.setMapStyle("dark");
        }}
      />
      <Button
        title="Night"
        onPress={() => {
          props.setMapStyle("night");
        }}
      />
      <Button
        title="Aubergine"
        onPress={() => {
          props.setMapStyle("aubergine");
        }}
      />
      <Text>Current map theme is {props.mapStyle}.</Text>
      <Button
        title="Return Home"
        onPress={() => {
          props.setRunStatus("Not Started");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
