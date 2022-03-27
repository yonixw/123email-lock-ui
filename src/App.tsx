import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { UltraTheme } from "./theme";
import logo from "./logo.svg";
import "./App.css";

function InnerApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
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
