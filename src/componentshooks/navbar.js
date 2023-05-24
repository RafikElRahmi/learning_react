import React, { useState } from "react";

const NavBar = () => {
  const [name, setName] = useState({
    name: "",
    lastname: "",
    exname: "",
    hiname: "",
    pname: "",
    byename:''
  });
    const show = () => {
        console.log(name)
    }
  return (
    <div>
      <div>name is :{name.name}</div>
      <div>lastname is :{name.lastname}</div>
      <input
        type="text"
        value={name.name}
        onChange={(e) => setName({ ...name, name: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <input
        type="text"
        value={name.exname}
        onChange={(e) => setName({ ...name, exname: e.target.value })}
      />
      <input
        type="text"
        value={name.hiname}
        onChange={(e) => setName({ ...name, hiname: e.target.value })}
      />
      <input
        type="text"
        value={name.pname}
        onChange={(e) => setName({ ...name, pname: e.target.value })}
      />
      <input
        type="text"
        value={name.byename}
        onChange={(e) => setName({ ...name, byename: e.target.value })}
      />
      <button onClick={show}>i will show all data</button>
    </div>
  );
};
export default NavBar;
