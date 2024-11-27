import React from "react";

function PostDetail({ post }) {
  return (
    <div>
      <h2>글 내용</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
