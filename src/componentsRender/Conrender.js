import React, {  useState } from "react";
import Conrenderchild from "./Conrenderchild";

export const Conet = React.createContext()
const Con = Conet.Provider
const Conrender = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("from conrender");
  const handleclick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleclick}>click - {count}</button>
      <div>
        <Con value={count}>{children}</Con>
      </div>
    </div>
  );
};

export default Conrender;
/* in app.js
function App() {
  return (
    <div>
      <Conrender>
        <Conrenderchild/>
      </Conrender>
    </div>
  );
}*/
