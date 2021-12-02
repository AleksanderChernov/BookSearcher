import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../state/store/store';
import Books from './Books/Books';
import { BookPage } from '../pages/BookPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route
          path="/book/:id"
          element={<BookPage />}
        />
      </Routes>
    </Router>
  </Provider>
);

export default App;
