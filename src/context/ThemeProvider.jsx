import { createContext, useState, useContext } from "react";
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ThemeContext);
};
export default ThemeProvider;

/* 

prevTheme === "light": Esta parte evalúa si la variable prevTheme es igual a "light". Es una condición lógica que puede ser true o false.

esta es la condicional prevTheme === "light"
si es verdadero devuelve dark sino devuelve light
? true
: false

*/
