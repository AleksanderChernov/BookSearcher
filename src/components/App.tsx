import React from 'react';
import { Provider } from 'react-redux';
import store from '../state/store/store';
import Books from './Books/Books';

const App = () => (
  <Provider store={store}>
    <Books />
  </Provider>
);

export default App;
