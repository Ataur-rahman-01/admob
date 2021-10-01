import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Bonus = (navigator) => {
  return (
    <View style={styles.bonus}>
      <Text>Find screens bonus</Text>
      <Button title="Click Me" onPress={() => alert("Button clicked")}></Button>
    </View>
  );
};

export default Bonus;
const styles = StyleSheet.create({
  bonus: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56A8CBFF",
  },
});
