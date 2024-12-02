import React from "react";
import PostList from "./PostList";

// 검색 버튼 누르면 이동하는 컴포넌트
function SearchResultPage({filter, resetAll, handleSelectPost}){
    return(
      <div>
        <h2>검색 목록</h2>
        {filter && filter.length > 0 ? 
          <PostList posts={filter} onSelect={handleSelectPost} /> : 
          <p>검색된 목록이 없습니다.</p> 
        }
        <button 
          onClick={resetAll}
        >
          메인 화면으로
        </button>
      </div>
    );
}

export default SearchResultPage;