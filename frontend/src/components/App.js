import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import PostLoader from './PostLoader';
import Post from './Post';
import NotFound from './NotFound';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={(props)=><PostLoader {...props} endpoint={"/api/posts/"} />} exact />
          <Route path="/post/:id/" component={Post} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;