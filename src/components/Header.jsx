import React from "react";
import { useTheme } from "../context/ThemeProvider";
import "../styles/DarkTheme.css";
import "../styles/LightTheme.css";
const Header = () => {
  const { theme } = useTheme();
  return (
    <header className={theme === "light" ? "light-header" : "dark-header"}>
      <h1>Tema dinámico</h1>
    </header>
  );
};
export default Header;
