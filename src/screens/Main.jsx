import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Router from './Router.jsx';
import store from '../store'

const App = () => (
  <Provider store={store}>
    <Router/>
  </Provider>
)

render(<App/>, document.getElementById('app'));
