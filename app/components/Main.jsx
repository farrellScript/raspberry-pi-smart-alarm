import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from '../store'

import Clock from './Clock.jsx'
import Settings from './Settings.jsx'

const App = () => (
  <Provider store={store}>
    <div>
      <Clock />
      <Settings />
    </div>
  </Provider>
)

render(<App/>, document.getElementById('app'));
