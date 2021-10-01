import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SupportsStyle = () => {
  return (
    <View style={styles.text}>
      <AntDesign name="phone" size={24} color="black" />
      <Text style={styles.text}>+8801796162465</Text>
    </View>
  );
};

export default SupportsStyle;
const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
