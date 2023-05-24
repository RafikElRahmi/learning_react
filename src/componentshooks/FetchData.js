import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
    let [items, setItems] = useState([])
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[])
  
  return (
    <div>
          {items.length ? (items.map((item) => {
          return (
        <div key={item.id}>
          <div>id is : {item.id}</div>
          <div>title is : {item.title}</div>
        </div>)
      })) : <h2>no items found</h2>}
    </div>
  );
};

export default FetchData;
