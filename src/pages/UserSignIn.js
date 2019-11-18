/// external modules ///
import React from 'react';

/// internal modules ///
import UserSignInForm from '../components/User/UserSignInForm';

/***************************************
  COMPONENT
***************************************/
const UserSignIn = (props) => {
  return (
    <section id='user-sign-in' className='page'>
      <header>
        <h2>Sign In</h2>
      </header>
      <main>
        <UserSignInForm submit={() => {}}/>
      </main>
      <footer></footer>
    </section>
  );
};

/**************************************/
export default UserSignIn;
