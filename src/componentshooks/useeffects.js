import React, { useEffect, useState } from "react";

const Try = () => {
  const [count, setCount] = useState(0);
    const add = () => {
      setCount(count+1)
    if (count >= 0) {
      document.title = `clicked ${count+1}`;
    } else {
      document.title = `disclicked ${count+1}`;
    }
  };

  const sous = () => {
      setCount(count - 1);
      if (0 >= count) {
        document.title = `disclicked ${count-1}`;
      } else {
        document.title = `clicked ${count-1}`;
      }
  };

  return (
    <div>
      <button onClick={add}>click </button>
      <button onClick={sous}>disclick</button>
    </div>
  );
};

export default Try;
