import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import '../node_modules/antd/dist/antd.css';
import Opsys from './Opsys.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A FOSS product</h1>
        </header>
        <div className = "OScheck">
          <p><strong> The OS you are using is <br/><Opsys/> </strong> </p>
          <div>
            <span>  <Button type="primary">H!t me</Button> </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
