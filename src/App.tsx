import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { UltraTheme } from "./theme";
import logo from "./logo.svg";
import "./App.css";
import { EnterEmail } from "./comp/EnterEmail";

function InnerApp() {
  return <EnterEmail />;
}

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={UltraTheme}>
      <InnerApp />
    </ChakraProvider>
  );
}

export default App;
