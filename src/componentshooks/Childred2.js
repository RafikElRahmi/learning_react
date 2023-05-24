import React, { useContext } from 'react'
import { Counter } from './RedContext';

const Childred2 = () => {
    const count3 = useContext(Counter);
    return (
      <div>
        <div>state is : {count3.counterstate.value}</div>
        <button onClick={() => count3.disstate({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => count3.disstate({ type: "decrement" })}>
          decrement
        </button>
        <button onClick={() => count3.disstate({ type: "reset" })}>
          reset
        </button>
      </div>
    );
}

export default Childred2