/// external modules ///
import React from 'react';
import { Route , NavLink } from 'react-router-dom';

/// internal modules ///
import Home from './pages/Home';
import About from './pages/About';
import UserAccount from './pages/UserAccount';
import UserSignIn from './pages/UserSignIn';
import UserSignOut from './pages/UserSignOut';
import UserSignUp from './pages/UserSignUp';

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
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/user/account'>Account</NavLink>
            <NavLink to='/user/sign-in'>Sign In</NavLink>
            <NavLink to='/user/sign-out'>Sign Out</NavLink>
            <NavLink to='/user/sign-up'>Sign Up</NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <Route
          exact path={[ '/' , '/home' ]}
          render={() => (<Home />)}
        />
        <Route
          exact path={[ '/about' ]}
          render={() => (<About />)}
        />
        <Route
          exact path={[ '/user/account' , '/user' , '/account' ]}
          render={() => (<UserAccount />)}
        />
        <Route
          exact path={[ '/user/sign-out' , '/sign-out' ]}
          render={() => (<UserSignOut />)}
        />
        <Route
          exact path={[ '/user/sign-in' , '/sign-in' ]}
          render={() => (<UserSignIn />)}
        />
        <Route
          exact path={[ '/user/sign-up' , '/sign-up' ]}
          render={() => (<UserSignUp />)}
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
