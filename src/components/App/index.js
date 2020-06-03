import React, { Component } from 'react';
import Row from "../Row";
import Bottom from "../Bottom"
import '../App';

class App extends Component {
    render() {
      return (
        <div className="wrapper">
          <div className="header">
          <div>
          <img
            className="logo"
            src="https://cdn.arstechnica.net/wp-content/uploads/2018/08/Netflix_Logo_Digital_Video-800x450.jpg"
            alt="netflix_logo"
          />
        </div>
          </div>
        
          <div className="header-layer" />
          <div className="main-content" id="top">
            <Row />
            <Bottom />
          </div>
        </div>
      );
    }
  }
  
  export default App;
  