import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Policy = (navigator) => {
  return (
    <View style={styles.supports}>
      <Text>Find screens policy</Text>
      <Button title="Click Me" onPress={() => alert("Button clicked")}></Button>
    </View>
  );
};

export default Policy;
const styles = StyleSheet.create({
  supports: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56A8CBFF",
  },
});
