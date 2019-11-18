/// external modules ///
import React from 'react';

/// internal modules ///
import UserSignUpForm from '../components/User/UserSignUpForm';

/***************************************
  COMPONENT
***************************************/
const UserSignUp = (props) => {
  return (
    <section id='user-sign-up' className='page'>
      <header>
        <h2>Sign Up</h2>
      </header>
      <main>
        <UserSignUpForm submit={() => {}}/>
      </main>
      <footer></footer>
    </section>
  );
};

/**************************************/
export default UserSignUp;
