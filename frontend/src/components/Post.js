import React from 'react'

 const Post = ({match}) => {
  return (
    <div>
      Here's the id {match.params.postId}
    </div>
  )
}


export default Post;