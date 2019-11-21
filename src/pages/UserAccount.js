/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const UserAccount = (props) => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  if(user){
    if(user.favorites.length >= 1){
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
    } else {
      return(
        <div>
          <header>
            <h2>Your Account</h2>
          </header>
          <main>
            <p>You have no favorites...</p>
          </main>
        </div>
      )
    }
  } else {
    props.history.push('/')
    return(
      <div></div>
    )
  }
};

/**************************************/
export default UserAccount;
