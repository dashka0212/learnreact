import React from 'react';
import ReactDOM from 'react-dom';
import '../less/style.less';
import App from './App';
import About from './About';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const Routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/about" component={About}>
            </Route>
            <Route path="/" component={App}>
            </Route>
        </Switch>
    </BrowserRouter>
)



ReactDOM.render(
    Routes,
    document.getElementById('root')
)