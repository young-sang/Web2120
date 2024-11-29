import React, { useState } from "react";
import PostList from "./PostList";

// 메인 사이트 컴포넌트
function MainSite( { posts, filter ,setFilter, setDidSearch, setShowForm, handleSelectPost} ){
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
        <PostList posts={filter} onSelect={handleSelectPost} />
        <button onClick={() => setShowForm(true)}>{"새 글 추가"}</button>
      </div>
    );
}

export default MainSite;