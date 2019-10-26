import React from 'react';
import logo from './logo.svg';
import less from 'less';
import {NavLink} from 'react-router-dom';
function App() {

  less.modifyVars({
    '@defaultColor': 'blue'
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="peasedaa">
          About
        </p>
        <NavLink exact to={"/"} className="App-link">Route to App</NavLink>
        <NavLink exact to={"/about"} className="App-link">Learn React</NavLink>
      </header>
    </div>
  );
}

export default App;
