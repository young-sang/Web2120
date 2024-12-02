import React from "react";

// 태그 추가 폼 컴포넌트
const TagForm = ({ changeAddTag, addTag, setAddTag, tags }) => {
    return(
    <div>
      <h2>태그 추가</h2>
      <form onSubmit={changeAddTag}>
        <input 
          type="text" 
          value={addTag} 
          onChange={(e) => {
            setAddTag(e.target.value);
          }} 
        />
        <button type="submit">추가</button>
      </form>
      <h3>태그 목록 : {tags.join(",")}</h3>
    </div>
    )
  }

export default TagForm;