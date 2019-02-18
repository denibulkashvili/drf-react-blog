import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import PostLoader from './PostLoader';
import Post from './Post';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={PostLoader} exact />
        <Route path="/:postId" component={Post} />
      </BrowserRouter>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;