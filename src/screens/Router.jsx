import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Clock from './Clock.jsx';
import Settings from './Settings.jsx';
import store from '../store'

const Router = () => (
    <HashRouter>
        <div className="app">
            <Route exact path="/" component={Clock} />
            <Route path="/Settings" component={Settings} />
        </div>
    </HashRouter>
)

export default Router