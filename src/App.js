import React, { Component } from 'react';
import Book from './containers/book';
import Tabs from './containers/tabs';
import Modal from './containers/modal';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="container-fluid">
          <div className="row">
              <Book/>
              <Tabs/>
          </div>
      </div>
    );
  }
}

export default App;
