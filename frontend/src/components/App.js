import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostLoader from './PostLoader';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <PostLoader endpoint={"api/posts/"} />
      </div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;