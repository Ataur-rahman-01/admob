import React from "react";
import { Box, Center, NativeBaseProvider } from "native-base";

import SupportsStyle from "../components/SupportsStyle";

const Supports = (navigator) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <SupportsStyle style={{ borderRadius: 5 }}></SupportsStyle>
      </Center>
    </NativeBaseProvider>
  );
};

export default Supports;
