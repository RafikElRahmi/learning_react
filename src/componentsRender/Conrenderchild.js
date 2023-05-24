import React, { useContext } from "react";
import { Conet } from "./Conrender";

const Conrenderchild = () => {
  console.log("from child");

  return (
    <div>
      <div>child</div>
      <ConrenderchildA />
    </div>
  );
};

export default React.memo(Conrenderchild)
export const ConrenderchildA = () => {
  console.log("from childA");
  return (
    <div>
      <div>childA</div>
      <ConrenderchildB />
    </div>
  );
};
export const ConrenderchildB = () => {
    const count = useContext(Conet)
  console.log("from childB");
  return (
    <div>
      <div>childB - {count}</div>
    </div>
  );
};
