import React from 'react';
import {connect} from 'react-redux';
import {createNewNews} from '../../redux/actions';
class newNews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }
    handleChange(event){
        this.setState({text: event.target.value});
    }
    handleSubmit(){
        this.props.dispatch(createNewNews(this.state.text));
    }
    render(){
        return(
            <center>
                <input value={this.state.text} onChange={this.handleChange.bind(this)}/>
                {this.props.name.name}
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </center>
        )
    }
}
function mapStateToProps(state){
    return {
        name: state.todo.name
    };
}
export default connect(mapStateToProps)(newNews)