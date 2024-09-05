import React from "react";
import { CounterContext } from "../context/CounterProvider";
import { useContext } from "react";
export default function Aumentar() {
  const { count, decrement } = useContext(CounterContext);
  return (
    <div>
      <button onClick={decrement}> count is {count}</button>
    </div>
  );
}
