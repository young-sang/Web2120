import React, { useState } from "react";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";
import SearchResultPage from "./SearchResultPage";
import MainSite from "./MainSite";


function Web({userType}) {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState(['normal', 'program']);

  const [selectedPost, setSelectedPost] = useState(false);
  const [filter, setFilter] = useState(posts);
  const [showForm, setShowForm] = useState(false);
  const [didSearch, setDidSearch] = useState(false);

  const addPost = (title, tags, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      tags,
      content,
    };
    const newPosts = [...posts, newPost];  // 새로운 게시글을 추가한 배열
    setPosts(newPosts);  // posts 업데이트
    setFilter(newPosts);  // filter도 최신 상태로 업데이트
    setShowForm(false);
  };

  

  const handleSelectPost = (post) => {
    if (selectedPost && selectedPost.id === post.id) {
      setSelectedPost(null);
    } else {
      setSelectedPost(post);
    }
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    const reindexedPosts = updatedPosts.map((post, index) => ({
      ...post,
      id: index + 1, // 새 ID는 1부터 시작
    }));
    setPosts(reindexedPosts);  // posts 업데이트
    setFilter(reindexedPosts);  // filter 상태도 최신 배열로 업데이트
    resetAll();  // 메인 화면으로 이동
  };

  // 메인 화면으로 돌아가기 위한 조건 초기화 함수
  const resetAll = () => {
    setSelectedPost(false);
    setShowForm(false);
    setDidSearch(false);
  }



  return (
    <div>
      {selectedPost ? (
        <PostDetail post={selectedPost} resetAll={resetAll} 
        onDelete={handleDeletePost}
        tags={tags}
        userType={userType}/>
      ) : showForm ? (
        <PostForm onAdd={addPost} tags={tags} resetAll={resetAll} />
      ) : didSearch ? (
        <SearchResultPage filter={filter} resetAll={resetAll} 
        handleSelectPost={handleSelectPost} />
      ) : (
        <MainSite
          posts={posts}
          filter={filter}
          tags={tags}
          setTags={setTags}
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
