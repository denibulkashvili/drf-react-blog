import React, { Component } from 'react';
import axios from 'axios';

 class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Loading post...",
      data: [],
      loaded: false
    }
  }
  
  get postId() {
    return "/api/posts/" + this.props.match.params.id + "/";
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: this.postId,
      crossDomain: true,
      withCredentials: true
    })
    .then(res => {
      const data = res.data
      console.log(this.postId)
      console.log(data)
      this.setState({
        data, 
        isLoaded: true
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  
  render() {
    return (
      <div>
        <h1>{this.state.data.title}</h1>
        <div>Created at: {this.state.data.date_created}</div>
        <div>{this.state.data.body}</div>
      </div>
    )
  }
}


export default Post;