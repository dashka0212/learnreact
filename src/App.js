import React from 'react';
import logo from './logo.svg';
import less from 'less';
import {NavLink} from 'react-router-dom';
import {testRed} from '../redux/actions';
import {connect} from 'react-redux';
class App extends React.Component {

  
  test(text){
    this.props.dispatch(testRed(text));
  }
  render(){
    less.modifyVars({
      '@defaultColor': 'blue'
    });
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="peasedaa" onClick={this.test.bind(this , 'aaa')}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <NavLink to={"/about"} className="App-link">Learn React</NavLink>
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
