import React from "react";
// import React, { useEffect, useState } from "react";
import "./hero.scss";
// import api from "./axiosApi/post";

export default function Herobanner() {
  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         //Not in the 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchPosts();
  // }, [])
  return (
    <div className="container homeHero">
      <h1>Hello</h1>
    </div>
  );
}
