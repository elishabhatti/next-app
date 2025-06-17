"use client";

import { useEffect, useState } from "react";
import { Counter } from "./Counter";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComponent = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);

      setPostData(data);

      return data;
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="font-roboto text-2xl text-white">Client Component</h1>
      <button
        onClick={() => alert("Hello")}
        className="bg-amber-400 text-white py-2 px-4 rounded-md"
      >
        {" "}
        Click Me
      </button>
      <Counter/>
      <ul className="grid grid-cols-3">
        {postData.map((cur, index) => {
          return (
            <>
              <li className="m-5" key={cur.id}>
                <div>UserId : {cur.userId}</div>
                <div>Title: {cur.title}</div>
                <div>Body: {cur.body}</div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default ClientComponent;
