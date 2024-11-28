import React, { useState } from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";
import SearchResultPage from "./SearchResultPage";
import MainSite from "./MainSite";

function Web() {
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 글", content: "첫 번째 글의 내용입니다." },
    { id: 2, title: "두 번째 글", content: "두 번째 글의 내용입니다." },
  ]);
  const [selectedPost, setSelectedPost] = useState(false);
  const [filter, setFilter] = useState(posts);
  const [showForm, setShowForm] = useState(false);
  const [didSearch, setDidSearch] = useState(false);

  const addPost = (title, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
    };
    setPosts([...posts, newPost]);
    setShowForm(false); 
    setFilter([...posts, newPost]);
  };

  const handleSelectPost = (post) => {
    if (selectedPost && selectedPost.id === post.id) {
      setSelectedPost(null);
    } else {
      setSelectedPost(post);
    }
  };

  const resetAll = () => {
    setFilter(posts);
    setSelectedPost(false);
    setShowForm(false);
    setDidSearch(false);
  }



  return (
    <div>
      {selectedPost ? (
        <PostDetail post={selectedPost} resetAll={resetAll} />
      ) : showForm ? (
        <PostForm onAdd={addPost} resetAll={resetAll} />
      ) : didSearch ? (
        <SearchResultPage filter={filter} resetAll={resetAll} handleSelectPost={handleSelectPost} />
      ) : (
        <MainSite
          posts={posts}
          filter={filter}
          setPosts={setPosts}
          setFilter={setFilter}
          setDidSearch={setDidSearch}
          setShowForm={setShowForm}
          handleSelectPost={handleSelectPost}
        />
      )}
    </div>
  );
}

export default Web;
