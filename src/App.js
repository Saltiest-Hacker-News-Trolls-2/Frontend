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
        <Route
          exact path={[ '/' , '/home' ]}
          render={() => (<h2>Home</h2>)}
        />
        <Route
          exact path={[ '/user/account' , '/user' , '/account' ]}
          render={() => (<h2>Account</h2>)}
        />
        <Route
          exact path={[ '/user/sign-in' , '/sign-in' ]}
          render={() => (<h2>Sign In</h2>)}
        />
        <Route
          exact path={[ '/user/sign-up' , '/sign-up' ]}
          render={() => (<h2>Sign Up</h2>)}
        />
      </main>
      <footer>
        TODO
      </footer>
    </div>
  );
}

/**************************************/
export default App;
