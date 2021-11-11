import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import Books from './Books/Books';

function App() {
  return <Provider store={store}>
    <Books />
  </Provider>
}

export default App;
