/// external modules ///
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

/// internal modules ///
import App from './App';
import rootReducer from './reducers'

/// styles ///
import 'reset-css/reset.css';
import 'normalize-css/normalize.css';
import './styles/index.css';
import './styles/basics.css';
import './styles/generics.css';

/***************************************
  APP
***************************************/
const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
