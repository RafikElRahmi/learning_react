import React, { useReducer } from 'react'
import Childred1 from './Childred1'
import Childred2 from './Childred2';
import Childred3 from './Childred3';

export const Counter = React.createContext()
const RedContext = () => {
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
      <Counter.Provider value={{counterstate:state,disstate:Dispatch}}>
        <Childred1 />
        <Childred2 />
        <Childred3 />
      </Counter.Provider>
    </div>
  );
}

export default RedContext