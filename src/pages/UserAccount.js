/// external modules ///
import React from 'react';
import { axioDeleteFavorite, axioGetHNComment } from '../actions';

import '../styles/account.css'

/***************************************
  COMPONENT
***************************************/
const UserAccount = (props) => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  if(user){
    if(user.favorites.length >= 1){
      return (
        <div className='user-account'>
          <header>
            <h2>Your Account</h2>
          </header>
          <main className='acc-main'>
            {user.favorites.map(comment => {
              return(
                <div className='commenter-card'>
                  <h3>'{comment.comment}'<br/>Written By: {comment.hacker}</h3>
                  <button onClick={axioDeleteFavorite(comment.id)}>unFavorite</button>
                </div>
              )
              })}
          </main>
          <footer></footer>
        </div>
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
