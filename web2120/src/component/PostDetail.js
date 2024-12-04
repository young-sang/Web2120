import React, { useState } from "react";

// 게시물 내용 컴포넌트
function PostDetail({ post, resetAll, onDelete, tags = [], userType }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);
  const [editedTags, setEditedTags] = useState(post.tags);

  const handleSave = () => {
    post.title = editedTitle;
    post.content = editedContent;
    post.tags = editedTags;
    setIsEditing(false);
  };

  return (
    <div>
      <h2>글 내용</h2>
      <h2 onClick={resetAll}>메인 화면으로</h2>

      {isEditing ? (
        <div>
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </div>
          <div>
            <select
              type="text"
              value={editedTags}
              onChange={(e) => setEditedTags(e.target.value)}
              >
              {tags.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
          </div>
          <div>
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
          />
          </div>
          <div>
            <button onClick={handleSave}>저장</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
          </div>
        </div>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <h4>{post.tags}</h4>
          <p>{post.content}</p>
          {userType === "admin" && (
            <div>
              <button onClick={() => setIsEditing(true)}>수정</button>
              <button onClick={() => onDelete(post.id)}>삭제</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PostDetail;
