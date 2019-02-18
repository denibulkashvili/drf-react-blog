import React, { Component } from 'react';
import axios from 'axios';
import key from "weak-key";
import PostList from './PostList';

class PostLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder: "Loading...",
      isLoaded: false,
      posts: []
    }
  }
  
  componentDidMount() {
    axios({
      method: 'get',
      url: "/api/posts/",
      crossDomain: true,
      withCredentials: true
    })
    .then(res => {
      const posts = res.data.results
      console.log(typeof(posts));
      this.setState({
        posts, 
        isLoaded: true
      }, () => {
        console.log(`Loaded data: ${this.state.posts}`)
      })
    });
  }

  renderPosts() {
    const { posts, isLoaded, placeholder } = this.state
    return (
      <div>
        <h1>Posts</h1>
        {isLoaded ? posts.map(post => <PostList key={key(post)} post={post} />) : placeholder}
      </div>
    );
  }
  
  render () {
    return (
      this.renderPosts()
    )
  }
}

export default PostLoader;
