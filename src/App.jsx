import { useState } from "react";
import Aumentar from "./components/Aumentar";
import Restar from "./components/Restar";
import { CounterProvider } from "./context/CounterProvider";
import ThemeProvider from "./context/ThemeProvider";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
    <>
      <h1>Context</h1>
      <ThemeProvider>
        <CounterProvider>
          <Aumentar />
          <Restar />
        </CounterProvider>
        <Header />
        <ThemeToggle />
      </ThemeProvider>
    </>
  );
}

export default App;

/* 

De esta manera manejamo los estados de manera local



*/
