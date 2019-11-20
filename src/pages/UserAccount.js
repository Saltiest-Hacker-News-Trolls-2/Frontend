/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const UserAccount = (props) => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    <section id='user-account' className='page'>
      <header>
        <h2>Your Account</h2>
      </header>
      <main>
        {user.favorites.map(comment => (<p>{comment}</p>))}
      </main>
      <footer></footer>
    </section>
  );
};

/**************************************/
export default UserAccount;
