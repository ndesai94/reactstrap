import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React.js + Bootstrap</h1>
        </header>
        <br /> <br />
        <Layout />
      </div>
    );
  }
}

export default App;
