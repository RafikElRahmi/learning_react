import React, { useReducer } from "react";

const Reducers = () => {
  const initial = { value: 0 };
  const setState = (state, action) => {
    if (action.type === "increment") {
      return { ...state, value: state.value + 1 };
    }
    if (action.type === "decrement") {
      return { ...state, value: state.value - 1 };
    }
    if (action.type === "reset") {
      return { ...state, value: 0 };
    }
  };
  const [state, Dispatch] = useReducer(setState, initial);

  return (
    <div>
      <div>state is : {state.value}</div>
      <button onClick={() => Dispatch({type:"increment"})}>increment</button>
      <button onClick={() => Dispatch({type:"decrement"})}>decrement</button>
      <button onClick={() => Dispatch({type:"reset"})}>reset</button>
    </div>
  );
};

export default Reducers;
