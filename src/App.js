import React from "react";
import HomePage from "./components/HomePage";
// 1. import `ChakraProvider` component
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Use at the root of your app
  return (
    // <ChakraProvider>
    <HomePage />
    // </ChakraProvider>
  );
}
export default App;
