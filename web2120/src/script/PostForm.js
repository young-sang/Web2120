import React, { useState } from "react";

function PostForm({ onAdd }) {
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
    </div>
  );
}

export default PostForm;
