import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Image } from "react-native";
import { Button } from "native-base";
// import { getAuth, onAuthStateChanged } from "firebase/auth"
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  return (
    <SafeAreaView>
      <Image style={styles.logo} source={require("../assets/Unt.png")} />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Mobile Number"
      />

      <Button
        colorScheme="secondary"
        onPress={() => console.log("hello world")}
      >
        Sign Up
      </Button>
    </SafeAreaView>
  );
};

export default Auth;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    width: 300,
  },
  logo: {
    width: 150,
    height: 100,
    marginLeft: 100,
    marginBottom: 30,
  },
  btn: {
    borderTopColor: 150,
  },
});
