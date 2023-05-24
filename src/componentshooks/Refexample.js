import React, { useEffect, useRef, useState } from "react";

const Refexample = () => {
  const [counter, setCounter] = useState(0);
  const refcounter = useRef();
  useEffect(() => {
    refcounter.current = setInterval(() => {
        setCounter(prev => prev + 1);
    }, 1000);
    return ()=>clearInterval(refcounter.current);
  }, []);
  return (
    <div>
      <div>counter is : {counter}</div>
      <button onClick={() => clearInterval(refcounter.current)}>stop it</button>
    </div>
  );
};

export default Refexample;
