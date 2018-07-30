import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from '../src/hoc/Auxiliary';
import Ganteng from '../src/components/Mirza';

const style = {
  backgroundColor: 'red'
};

class App extends Component {
  state = {
    data: 'Ganteng Sekali',
    input: []
  };

  ubahHandler = () => {
    this.setState({
      data: 'Alvin Jelek'
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Aux>
            <h1 className="App-title" onClick={this.ubahHandler}>
              {this.state.data}
            </h1>
          </Aux>
          <Ganteng />
        </header>
        <p className="App-intro" onClick={this.ubahHandler}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
