import React, { useState } from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";

function MainSite( { posts, filter ,setFilter, setDidSearch, setShowForm, handleSelectPost, showForm} ){
  const [search, setSearch] = useState('');
  

  const easySearch = (searchInput) => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if(searchInput == ""){
      setFilter(posts);
    }else if(filtered.length == 0){
      setFilter([]);
    }else{
      setFilter(filtered);
    }
  }

  const searchSubmit = (e) =>{
    e.preventDefault();
    setDidSearch(true);
  }

  return(
    <div>
      <h1>게시판</h1>
      <form onSubmit={searchSubmit}>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => {
            setSearch(e.target.value);
            easySearch(e.target.value);
          }} 
        />
        <button type="submit">검색</button>
      </form>
      <PostsList posts={filter} onSelect={handleSelectPost} />
      <button onClick={() => setShowForm(true)}>{"새 글 추가"}</button>
    </div>
  );
}

function SearchResultPage({filter, setFilter, setDidSearch, handleSelectPost}){
  return(
    <div>
      <h2>검색 목록</h2>
      {filter && filter.length > 0 ? 
        <PostsList posts={filter} onSelect={handleSelectPost} /> : 
        <p>검색된 목록이 없습니다.</p> 
      }
      <button 
        onClick={() => {
          setDidSearch(false);
          setFilter([]);
        }}
      >
        메인 화면으로
      </button>
    </div>
  );
}

function PostsList({ posts, onSelect }) {
  if(!posts || posts.length === 0){
    return(
      <div>
        <h2>게시글 목록</h2>  
        <p>검색된 목록이 없습니다.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onSelect(post)}>
            {post.id}. {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}


function PostPage( { post, setSelectedPost } ){
  return (
    <div>
      <h2>글 내용</h2>
      <h2 onClick={()=>{
        setSelectedPost(false);
      }}>메인 화면으로</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}

function PostsForm ( {onAdd, setShowForm} ) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAdd(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h2>새 글 추가</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>내용: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">추가</button>
      </form>

      <button onClick={() => {
        setShowForm(false);
      }}>
        {"취소"}
      </button>
    </div>
  );
}

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

  const resetAll = (posts) => {
    setFilter(posts);
    setSelectedPost(false);
    setShowForm(false);
    setDidSearch(false);
  }



  return (
    <div>
      {selectedPost ? (
        <PostPage post={selectedPost} setSelectedPost={setSelectedPost} />
      ) : showForm ? (
        <PostsForm onAdd={addPost} setShowForm={setShowForm} />
      ) : didSearch ? (
        <SearchResultPage filter={filter} setFilter={setFilter} setDidSearch={setDidSearch} handleSelectPost={handleSelectPost} />
      ) : (
        <MainSite
          posts={posts}
          filter={filter}
          setPosts={setPosts}
          setFilter={setFilter}
          setDidSearch={setDidSearch}
          setShowForm={setShowForm}
          handleSelectPost={handleSelectPost}
          showForm={showForm}
        />
      )}
    </div>
  );
}

export default Web;
