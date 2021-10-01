import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Profile = (navigator) => {
  return (
    <View style={styles.profile}>
      <Text>Find screens profile</Text>
      <Button title="Click Me" onPress={() => alert("Button clicked")}></Button>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56A8CBFF",
  },
});
