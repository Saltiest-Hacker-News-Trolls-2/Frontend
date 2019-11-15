/// external modules ///
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/// internal modules ///
import App from './App';

/// styles ///
import 'reset-css/reset.css';
import 'normalize-css/normalize.css';
import './styles/index.css';
import './styles/basics.css';
// import './styles/generics.css';

/***************************************
  APP
***************************************/
ReactDOM.render (
  <Router>
    <App />
  </Router>
, document.getElementById ('root')
);
