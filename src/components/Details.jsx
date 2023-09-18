// src/components/PostDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.data.post);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [postId]);

  return (
    <div>
      <h2>Post Details</h2>
      <h3>Title: {post.title}</h3>
      <p>Description: {post.description}</p>
      {/* Display other post details as needed */}
    </div>
  );
}

export default PostDetail;
