import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import Auth from "../components/Auth";
import { Box, Center, NativeBaseProvider } from "native-base";

const Home = (navigator) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Auth></Auth>
      </Center>
    </NativeBaseProvider>
  );
};

export default Home;
