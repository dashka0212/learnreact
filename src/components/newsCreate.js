import React from 'react';
import Header from './header';

export default class Cnews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            garchig : '',
            desc : '',
            body : '',
        }
    }
    changeTitle(e){
        let dta = {};
        dta[e.target.name] = e.target.value;
        console.log(dta);
        this.setState(dta);
    }
    render(){
        return (
            <div>
                <Header />
                <input value={this.state.title} ref="inp" name="title" placeHolder="title" onChange={this.changeTitle.bind(this)}/>
                <input value={this.state.desc} name="desc" placeHolder="desc" onChange={this.changeTitle.bind(this)} />
                <input value={this.state.body} name="body" placeHolder="body" onChange={this.changeTitle.bind(this)} />
                <button>Add new</button>
            </div>
        )
    }
}