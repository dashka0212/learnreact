import React from 'react';
import ReactDOM from 'react-dom';
import '../less/style.less';
import App from './App';
import About from './About';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducers from '../redux/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const midd = [thunk];
const store = createStore(reducers , window.__INITIAL_STATE__ , applyMiddleware(...midd));
const Routes = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/about" component={About}></Route>
                <Route path="/" component={App}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>
)



ReactDOM.render(
    Routes,
    document.getElementById('root')
)