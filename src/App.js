import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react'
import './App.css';
import Opsys, {OSName} from './Opsys.js';

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
            <span>
              <Button
                primary
                onClick={() => {
                  if(OSName() === "Linux"){
                    this.props.history.push("/login");
                  }else{
                    alert("This is a Linux Users only community");
                  }
                }}
                >
                H!t Me
              </Button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
