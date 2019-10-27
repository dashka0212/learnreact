import React from 'react';
import logo from './logo.svg';
import less from 'less';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
class About extends React.Component {
  componentDidMount(){
  }
  render(){
    less.modifyVars({
      '@defaultColor': 'blue'
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="peasedaa">
            About Compo
          </p>
          <NavLink exact to={"/"} className="App-link">Home</NavLink>
          <NavLink exact to={"/about"} className="App-link">About</NavLink>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state);
  return {
    state
  }
}
export default connect(mapStateToProps)(About);
