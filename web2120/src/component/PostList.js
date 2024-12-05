import React from "react";

// 게시물 목록 컴포넌트
function PostList({ posts, onSelect }) {

  console.log(posts);
  

  if(!posts || posts.length === 0){
    return(
      <div>
        <h2>게시글 목록</h2>  
        <p>검색된 목록이 없습니다.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onSelect(post)}>
            {post.id}. {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
