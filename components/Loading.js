import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

export default function Loading(props) {
  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      props.setLat(location.coords.latitude);
      props.setLong(location.coords.longitude);
      if (props.lat && props.long) {
        props.setRunStatus("Started");
        props.setCordsArr([{ latitude: props.lat, longitude: props.long }]);
      }
    })();
  }, [props.lat, props.long]);

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
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
