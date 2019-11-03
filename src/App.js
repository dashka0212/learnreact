import React , {Component} from 'react';
import less from 'less';
import {NavLink} from 'react-router-dom';
import {testRed , getUsers , getTodos} from '../redux/actions';
import {connect} from 'react-redux';
class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        users : [],
        todos : []
      }
  }
  componentDidMount(){
    this.props.dispatch(getUsers());
  }
  test(event){
    this.props.dispatch(testRed(event.target.value));
  }
  testing(id){
    console.log(id);
    this.props.dispatch(getTodos(id));
  }
  render(){
    console.log(this.props.todos);
    return (
      <div className="App">
        <header className="App-header">
          
          {
            this.props.users.map((user) => 
              <p onClick={this.testing.bind(this , user.id)}>
                {user.name}
              </p>
            )
          }
          <NavLink to={"/about"} className="App-link">About</NavLink>
        </header>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    users : state.todo.users,
    todos : state.todo.todos,
  }
}
export default connect(mapStateToProps)(App);
