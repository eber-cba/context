import React from "react";
import { CounterContext } from "../context/CounterProvider";
import { useContext } from "react";
export default function Aumentar() {
  const { count, increment } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increment}> count is {count}</button>
    </div>
  );
}
