/// external modules ///
import React, { useState } from 'react';
import axios from 'axios';

/// internal modules ///
import UserSignUpForm from '../components/User/UserSignUpForm';

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

const UserSignUp = (props) => {
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
      .post('https://only-salty-hackers.herokuapp.com/api/register', state.credentials)
      .then(res => {
        console.log('response', res)
        sessionStorage.setItem('token', res.payload);
        setState({ ...state, isLoggedIn: true });
        props.history.push('/user/account')
      })
      .catch(er => console.log(er))
  }

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
