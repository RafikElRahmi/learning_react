import React, { useRef } from "react";

const Reflogin = () => {
  const user = useRef(null);
    const pass = useRef(null);
    const name =''
  const data = { user: user, pass: pass };
  return (
    <div>
      <input type="text"  ref={user} />
      <input type="text" ref={pass} />
      <button onClick={() => console.log(data)}>click me</button>
    </div>
  );
};

export default Reflogin;
