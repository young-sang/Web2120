import React, { useState } from "react";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";
import SearchResultPage from "./SearchResultPage";
import MainSite from "./MainSite";


function Web({userType}) {
  const [posts, setPosts] = useState([
  ]);
  const [tags, setTags] = useState(
    ['normal', 'program']
  );

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

  // 메인 화면으로 돌아가기 위한 조건 초기화 함수
  const resetAll = () => {
    setFilter(posts);
    setSelectedPost(false);
    setShowForm(false);
    setDidSearch(false);
  }



  return (
    <div>
      {selectedPost ? (
        <PostDetail post={selectedPost} resetAll={resetAll} 
        onDelete={(id) => {
          // 1. 해당 ID의 게시글을 제외한 새로운 배열 생성
          const updatedPosts = posts.filter((post) => post.id !== id);
          // 2. ID를 다시 매기기
          const reindexedPosts = updatedPosts.map((post, index) => ({
            ...post,
            id: index + 1, // 새 ID는 1부터 시작
          }));
          // 3. 상태 업데이트
          setPosts(reindexedPosts);
          resetAll(); // 메인 화면으로 이동
        }}
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
