// src/components/PostList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //C: I see that you have COMPLETELY side-stepped the use of Redux RTK Queries by using fetch. this does work as expected but we are expecting this to be done the way that was taught using RTK
  useEffect(() => {
    fetch("https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
