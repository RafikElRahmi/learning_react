import React, { useContext } from "react";
import S4 from "./S4";
import { File } from "./Context";

const S3 = () => {
  const newfile = useContext(File);
  console.log(newfile)
  return (
    <div>
      <div>hi file : {newfile.id}</div>
    </div>
  );
};

export default S3;
