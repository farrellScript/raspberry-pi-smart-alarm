import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncNodeStorage } from 'redux-persist-node-storage'
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

persistStore(store, { storage: new AsyncNodeStorage('/tmp/storageDir') })

export default store;
