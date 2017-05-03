import React from 'react';
import ReactDom from "react-dom";
import './App.css';
import Calculator from './Calculator';
import Header from './Header';


class App extends React.Components {
  render() {
    return (
      <div className="App">
        <Header />
        <Calculator />
      </div>
    );
  }
}

export default App;
