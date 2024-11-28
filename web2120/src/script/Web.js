import React, { useState } from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";

function Web() {
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 글", content: "첫 번째 글의 내용입니다." },
    { id: 2, title: "두 번째 글", content: "두 번째 글의 내용입니다." },
  ]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addPost = (title, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
    };
    setPosts([...posts, newPost]);
    setShowForm(false); 
  };

  const handleSelectPost = (post) => {
    if (selectedPost && selectedPost.id === post.id) {
      setSelectedPost(null);
    } else {
      setSelectedPost(post);
    }
  };

  return (
    <div>
      <h1>게시판</h1>
      <PostList posts={posts} onSelect={handleSelectPost} />
      {selectedPost && <PostDetail post={selectedPost} />}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "취소" : "새 글 추가"}
      </button>
      {showForm && <PostForm onAdd={addPost} />}
    </div>
  );
}

export default Web;
