import React, { Component } from 'react';
import axios from 'axios';
import key from 'weak-key';

 class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Loading post...",
      data: [],
      loaded: false
    }
  }
  
  get postSlug() {
    return "/api/posts/" + this.props.match.params.slug + "/";
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: this.postSlug,
      crossDomain: true,
      withCredentials: true
    })
    .then(res => {
      const data = res.data
      console.log(this.postSlug)
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

  get tagsList() {
    
    const tagsList = Object.entries(this.state.data.tags).map(tag => (
      <span key={key(tag)}>
        {tag[1].name} &nbsp;
      </span>
    ));
    console.log(tagsList)
    return tagsList;  
  }

   
  render() {

    const { title, date_created, body, cover } = this.state.data

    const { isLoaded, placeholder } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <img src={cover} />
        <p>Tags: <span>{isLoaded ? this.tagsList : placeholder}</span> </p>
        <div>Created at: {date_created}</div>
        <div>{body}</div>
      </div>
    )
  }
}


export default Post;