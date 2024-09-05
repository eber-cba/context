import { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1); // ➕ Función para incrementar
  const decrement = () => setCount((prevCount) => prevCount - 1); // ➖ Función para decrementar
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };

/* 

1: importamos createContext y useState
2: crear el contexto que sera una variable global donde me permitira obtener la info
3: Creamos el provider que sera el que me de la informacion para consumir en el componente donde este parado
que el children va hacer referencia al componente donde esta parado


*/
