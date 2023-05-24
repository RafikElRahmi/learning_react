import React from "react";
import { File } from "./Context";

const S4 = () => {
  return (
    <div>
          <File.Consumer>{user => {
              console.log(user )
              return <div>{user.long}</div>
      }}</File.Consumer>
    </div>
  );
};

export default S4;
