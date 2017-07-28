import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Clock from './Clock.jsx';
import Edit from './Edit.jsx';
import store from '../store'

const Router = () => (
    <HashRouter>
        <div className="app">
            <Route exact path="/" component={Clock} />
            <Route path="/edit" component={Edit} />
        </div>
    </HashRouter>
)

export default Router