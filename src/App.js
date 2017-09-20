import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import Navbar from './components/Navbar'
import Starbar from './components/Starbar';
import DropdownMenu from './components/DropdownMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Componentization Commencing...</h2>
        </div>
        <Navbar />
        <Starbar />
        <DropdownMenu />

      </div>
    );
  }
}

export default App;
