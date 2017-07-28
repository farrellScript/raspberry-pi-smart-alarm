import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Clock from './Clock.jsx';
import Edit from './Edit.jsx';

const App = () =>
  <HashRouter>
    <div className="app">
        <Route exact path="/" component={Clock} />
        <Route path="/edit" component={Edit} />
    </div>
  </HashRouter>;

render(React.createElement(App), document.getElementById('app'));
