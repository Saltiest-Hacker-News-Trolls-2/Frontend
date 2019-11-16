/// external modules ///
import React from 'react';
import { Route , NavLink } from 'react-router-dom';

/// styles ///
import './styles/App.css';

/***************************************
  COMPONENT
***************************************/
function App () {
  return (
    <div className='App'>
      <header>
        <h1>TODO</h1>
        <nav>
          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/user/account'>Account</NavLink>
            <NavLink to='/user/sign-in'>Sign In</NavLink>
            <NavLink to='/user/sign-up'>Sign Up</NavLink>
          </ul>
        </nav>
      </header>
      <main>
        TODO
      </main>
      <footer>
        TODO
      </footer>
    </div>
  );
}

/**************************************/
export default App;
