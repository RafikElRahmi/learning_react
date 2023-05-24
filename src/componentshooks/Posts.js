import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  //   const [post, setPost] = useState([]);
  //   const [id, setId] = useState(0);
  //   const [check, setCheck] = useState(0);
  //   const [long, setlong] = useState(0);
  //   const [Fresh, setFresh] = useState(true);
  //     const [Noitem, setNoitem] = useState(0);
  const [all, setAll] = useState({
    post: [],
    id: 0,
    check: 0,
    long: 0,
    Fresh: true,
    Noitem: 0,
  });
  const handleClick = () => {
    // setCheck(id);
    // setFresh(!Fresh);
    setAll({ ...all, check: all.id, Fresh: !all.Fresh });
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        // setlong(res.data.length);
        // setAll((all.long = res.data.length));
        setAll({ ...all, long: res.data.length});
        console.log(all);
        if (all.id > 0 && all.id <= all.long) {
          //   setPost(res.data[id - 1]);
          //   setNoitem(0);
          setAll({ ...all, long: 101, post: res.data[all.id - 1], Noitem: 0 });
        } else {
          //   setNoitem(1);
          setAll({ ...all, Noitem: 1 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [all.check, all.Fresh]);

  return (
    <div>
      {/* <input
        type="number"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      /> */}
      <input
        type="number"
        value={all.id}
        onChange={(e) => {
          setAll({ ...all, id: +e.target.value });
        }}
      />
      <button onClick={handleClick}>click</button>
      {all.Noitem === 0 ? (
        <div>post is :{all.post.title}</div>
      ) : (
        <h1>no item found</h1>
      )}
    </div>
  );
};

export default Posts;
