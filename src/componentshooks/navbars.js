import React, { useState } from "react";

const NavBars = () => {
  const [it, setIt] = useState([]);
  const add = () => {
    setIt([...it, { id: it.length + 1, val: it.length * 10 }]);
  };
  const sous = () => {
    if (it.length > 0) {
      const hi = it;
      hi.pop();
      setIt([...it]);
    }
  };
  return (
    <div>
      <button onClick={add}>add</button>
      <button onClick={sous}>sous</button>
      <ul>
        {it.map((item) => {
          return <li key={item.id}>{item.val}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavBars;
