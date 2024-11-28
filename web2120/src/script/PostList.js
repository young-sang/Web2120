import React from "react";

function PostList({ posts, onSelect }) {
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
