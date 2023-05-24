import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initial = {
  load: true,
  post: {},
  err: "",
};
const reudcer = (state, action) => {
  switch (action.type) {
    case "succus":
      return {
        load: false,
        post: action.data,
        err: "",
      };
    case "fail":
      return {
        load: false,
        post: {},
        err: "something went wrong",
      };
    default:
      return state;
  }
};
const Fetchdatas = () => {
  const [state, dispatch] = useReducer(reudcer, initial);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                dispatch({ data: res.data, type: "succus" });
            })
            .catch(() => {
                dispatch({ type: "fail" });
            });
    },[]);
    return (
      <div>
        {state.load ? <h1> loading </h1> : <div> {state.post.title}</div>}
        {state.err ? <div>{state.err}</div> : null}
      </div>
    );
};

export default Fetchdatas;
