import React, { useState } from "react";

// 게시물 추가 입력 컴포넌트
function PostForm ( {onAdd, tags, resetAll} ) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagList, setTagList] = useState([]);


  // 리스트 변경 시 tagList의 마지막에 추가
  const handleSelectChange = (e, index) => {
    const newTagList = [...tagList];
    newTagList[index] = e.target.value;
    setTagList(newTagList);
  };

  // tagList 배열의 마지막 자리에 빈 자리 추가
  const addTag = () => {
    setTagList([...tagList, ""]);
  };

  // 드롭다운 태그 메뉴
  const optionTaglist = (index) =>{
    var optionTagBundle = []; // select 드롭다운 1개의 option 설정
    optionTagBundle.push(<option value={""}>{"none"}</option>)
    for(const optionTag of tags){      
      optionTagBundle.push(<option value={optionTag}>{optionTag}</option>);
    }

    return(
      <select // select 태그 하나당 고유의 설정
        onChange={(e) => handleSelectChange(e, index)} 
        value={tagList[index]} 
        name={`optionTag${index}`}
        key={index}
      >
        {optionTagBundle}
      </select>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const turnOverTag = [];
    for(const i of tagList){
      if(i != '') turnOverTag.push(i);
      else continue;
    }
    if (title && turnOverTag && content) {
      onAdd(title, tagList, content);
      setTitle("");
      setContent("");
      setTagList([]);
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
          <label>태그: </label>
          {tagList.map((_,index) => optionTaglist(index))}
          <button type="button" onClick={addTag}>태그 추가</button>
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

      <button onClick={resetAll}>
        {"취소"}
      </button>
    </div>
  );
}

export default PostForm;
