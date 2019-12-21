import React from 'react';
import ReactDOM from 'react-dom';
import '../less/style.less';
import App from './App';
import About from './components/News';
import NewsSingle from './components/newsSingle';
import newNews from './components/newNews';
import NewsCreate from './components/newsCreate';
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
                <Route path="/news/vvsgeh" component={newNews}></Route>
                <Route path="/news/create" component={NewsCreate}></Route>
                <Route path="/news/:id" component={NewsSingle}></Route>
                <Route path="/news" component={About}></Route>
                <Route path="/" component={App}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>
)



ReactDOM.render(
    Routes,
    document.getElementById('root')
)