import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

export default function Home({ setRunStatus }) {
  return (
    <View style={styles.container}>
      <Button
        title="Start"
        onPress={() => {
          setRunStatus("Loading");
        }}
      />
      <Button
        title="Settings"
        onPress={() => {
          setRunStatus("Settings");
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
