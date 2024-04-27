import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/blog/posts`);
        setPosts(response.data);
        const allTags = new Set();
        const allCategories = new Set();
        response.data.forEach((post) => {
          post.tags.forEach((tag) => allTags.add(tag.name));
          allCategories.add(post.category.name);
        });
        setTags(Array.from(allTags));
        setCategories(Array.from(allCategories));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const filterPosts = (post) => {
    if (
      (selectedTag === "" ||
        post.tags.some((tag) => tag.name === selectedTag)) &&
      (selectedCategory === "" || post.category.name === selectedCategory)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recent Blog Posts</h1>
      <div className="flex mb-4">
        <label className="mr-2">Filter by Tag:</label>
        <select
          className="border rounded-md px-2 py-1"
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">All</option>
          {tags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <label className="mx-4">Filter by Category:</label>
        <select
          className="border rounded-md px-2 py-1"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.filter(filterPosts).map((post) => (
          <div key={post.id} className="border p-4 rounded-md">
            <Link to={`/blog/posts/${post.id}`}>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            </Link>
            <p className="text-gray-600 mb-2">Author: {post.author.username}</p>
            <p className="text-gray-600 mb-2">Category: {post.category.name}</p>
            <p className="text-gray-600 mb-2">
              Tags:{" "}
              {post.tags.map((tag, index) => (
                <span key={index}>
                  {tag.name}
                  {index !== post.tags.length - 1 && ", "}
                </span>
              ))}
            </p>
            <div className="text-gray-700">
              <p>{post.content.substring(0, 150)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
