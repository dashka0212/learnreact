import React from 'react';
import logo from './logo.svg';
import less from 'less';
import {NavLink} from 'react-router-dom';
import {testRed , testReq} from '../redux/actions';
import {connect} from 'react-redux';
class App extends React.Component {
  test(event){
    this.props.dispatch(testRed(event.target.value));
  }
  testing(){
    this.props.dispatch(testReq());
  }
  render(){
    console.log(this.props);
    less.modifyVars({
      '@defaultColor': 'blue'
    });
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.test.bind(this)}/>
          <p className="peasedaa" onClick={this.testing.bind(this)}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <NavLink to={"/about"} className="App-link">About</NavLink>
        </header>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    todo : state.todo
  }
}
export default connect(mapStateToProps)(App);
