import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
//   const params = useParams();
//   let id = params.id;
    let {id} = useParams()
  if (!(id >= 0 && id <= 100)) {
    id = null;
  }
  return <div> {id ? <div>user {id}</div> : <div>no user found</div>}</div>;
};

export default User;
