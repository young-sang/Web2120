import React from "react";

// 게시물 내용 컴포넌트
function PostDetail( { post, resetAll } ){
  return (
    <div>
      <h2>글 내용</h2>
      <h2 onClick={resetAll}>메인 화면으로</h2>
      <h3>{post.title}</h3>
      <h4>{post.tags}</h4>
      <p>{post.content}</p>
    </div>
  );
}


export default PostDetail;
