import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [post, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/blog/posts/")
      .then((res) => res.data)
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deletePost = (id) => {
    api
      .delete(`/blog/posts/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Post deleted!");
        else alert("Failed to delete post.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createPost = (e) => {
    e.preventDefault();
    api
      .post("/blog/posts/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to make note.");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        {/* <h2>Posts</h2>
        {post.map((post) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))} */}
      </div>
      <h2>Create a Post</h2>
      <form onSubmit={createPost}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Home;
