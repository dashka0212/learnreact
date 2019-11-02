import React , {Component} from 'react';
import less from 'less';
import {NavLink} from 'react-router-dom';
import {testRed , testReq} from '../redux/actions';
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
    /*
      
      sort();
    */
    //https://jsonplaceholder.typicode.com/todos?userId=1
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1').
          then(res => res.json()).
          then((data) => 
            {
              var filt = data.sort((a , b) => { 
                return  b.title - a.title;
              });
              console.log(filt);
              this.setState({todos : filt});
            }
          ).catch();
  }
  test(event){
    this.props.dispatch(testRed(event.target.value));
  }
  testing(id){
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + id).
          then(res => res.json()).
          then((data) => 
            {
              this.setState({todos : data})
            }
          ).catch();
  }
  render(){
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.test.bind(this)}/>
          
          {
            this.state.users.map((user) => 
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
    todo : state.todo
  }
}
export default connect(mapStateToProps)(App);
