import React from "react";

const Count = ({ count, children }) => {
  console.log(children);
  return (
    <div>
      {children}
      {count}
    </div>
  );
};

export default React.memo(Count);
