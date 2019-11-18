/// external modules ///
import React, { useState } from 'react';
import axios from 'axios';

/***************************************
  COMPONENT
***************************************/
const initialInfo = {
  credentials: {
    username: '',
    email: '',
    password: ''
  },
  isLoggedIn: false
};

const UserSignIn = (props) => {
  const [state, setState] = useState(initialInfo);

  const handleChanges = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://only-salty-hackers.herokuapp.com/api/login', state.credentials)
      .then(res => {
        console.log('response', res)
        sessionStorage.setItem('token', res.payload);
        setState({ ...state, isLoggedIn: true });
        props.history.push('/user/account')
      })
      .catch(er => console.log(er))
  }
  
  return (
    <section id='user-sign-in' className='page'>
      <header>
        <h2>Sign In</h2>
      </header>
      <main>
        TODO
      </main>
      <footer></footer>
    </section>
  );
};

/**************************************/
export default UserSignIn;
