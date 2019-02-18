import React from 'react';

const PostList = (props) => {
  return (
    <div>
      <h2>{props.post.title}</h2>
      <span>{props.post.date_created}</span>
      <div>{props.post.body}</div>
    </div>
  )
}

export default PostList;