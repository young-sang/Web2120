import React, { useState } from "react";
import PostList from "./PostList";
import TagForm from "./TagForm";
import SearchForm from "./SearchForm";


// 메인 사이트 컴포넌트
function MainSite( { posts, filter, tags, setTags ,setFilter, setDidSearch, setShowForm, handleSelectPost} ){
    const [search, setSearch] = useState(''); // 검색 타이핑 변수
    const [searchMode, setSearchMode] = useState('normalMode'); // 검색 모드 설정
    const [addTag, setAddTag] = useState('');
    
    const mode = ['normalMode', 'tagMode'];

    // 검색 모드 변경
    const changeSearchMode = () => {
      if(searchMode == mode[0]){
        setSearchMode(mode[1]);
      }else if(searchMode == mode[1]){
        setSearchMode(mode[0]);
      }
    }
  
    const easySearch = (searchInput) => {
      let filtered = [];
      // 일반 모드 검색
      if(searchMode == mode[0]){
        filtered = posts.filter(post =>
          post.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      }else if(searchMode == mode[1]){
        // 태그 모드 검색
        const inputTags = searchInput.split(' ').map(tag => tag.toLowerCase());
        posts.forEach(post => {
          if(inputTags.every(tag => post.tags.includes(tag))){
            filtered.push(post);
          }
        });
      }
      
      // filter 세팅
      if(searchInput == ""){
        setFilter(posts);
      }else if(filtered.length == 0){
        setFilter([]);
      }else{
        setFilter(filtered);
      }
    }
  
    const changeAddTag = (e) => {
      e.preventDefault();
      setTags([...tags, addTag]);
      setAddTag('');
    }

    const searchSubmit = (e) =>{
      e.preventDefault();
      setDidSearch(true);
    }
  
    return(
      <div>
        <h1>게시판</h1>
        <TagForm changeAddTag={changeAddTag} addTag={addTag} setAddTag={setAddTag} tags={tags}/>
        <SearchForm changeSearchMode={changeSearchMode} searchMode={searchMode} searchSubmit={searchSubmit} search={search} setSearch={setSearch} easySearch={easySearch} />
        <PostList posts={filter} onSelect={handleSelectPost} />
        <button onClick={() => setShowForm(true)}>{"새 글 추가"}</button>
      </div>
    );
}

export default MainSite;