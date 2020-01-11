import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../redux/actions';
class Login extends React.Component{
    constructor(){
        super();
        this.state  = {
            username: '',
            password: ""
        }
    }
    changeHandle(e){
        this.setState({[e.target.name] : e.target.value});
    }
    submit(){
        const {dispatch} = this.props;
        dispatch(login({username: this.state.username , password: this.state.password}));
    }
    render(){
        return(
            <div>
                <input value={this.state.username} name="username" onChange={this.changeHandle.bind(this)}/>
                <input value={this.state.password} name="password" onChange={this.changeHandle.bind(this)}/>
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(Login)