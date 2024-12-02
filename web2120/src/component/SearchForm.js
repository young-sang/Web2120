import React from "react";

// 검색 폼 컴포넌튼
const SearchForm = ( {changeSearchMode, searchMode, searchSubmit, search, setSearch, easySearch} ) => {
    return (
      <div>
        <h2>검색</h2>
        <button onClick={changeSearchMode}>검색 모드 : {searchMode}</button>
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
      </div>
    )
}

export default SearchForm;
