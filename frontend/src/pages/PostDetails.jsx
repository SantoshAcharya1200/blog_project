import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch post details from your API
    api
      .get(`/blog/posts/${id}/`)
      .then((response) => response.data)
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p className="author">Author: {post.author.username}</p>
      <p className="category">Category: {post.category.name}</p>
      <p className="tags"></p>
      {/* Display other post details */}
      <h2>{post.content}</h2>
      <h2></h2>
    </div>
  );
}

export default PostDetails;
