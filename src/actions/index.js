import axiosWithAuth from '../components/AxiosWithAuth';
import axios from 'axios';
import { hashHistory } from 'react-router-dom';

// ACTION TYPES
export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN = 'LOG_IN';


// ACTION FUNCTIONS
/***USER FUNCTIONS***/
// LOGOUT USER
export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOG_OUT });
};
// GETTING USER DATA FROM LOCAL STORAGE
export const getUser = () => (dispatch) => {
  dispatch({ type: SET_USER, payload: JSON.parse(localStorage.getItem('user')) });
};

// SETTING USER DATA TO LOCAL STORAGE
export const setUser = () => (dispatch) => {
  dispatch({ type: SET_USER, payload: JSON.parse(localStorage.setItem('user')) });
};
/***AXIOS CALLS***/
// SET USER'S FAVORITES FOR SERVER

export const axioAddFavorite = (comment) => {
  let message = {};
  
  axios
    .post(`https://only-salty-hackers.herokuapp.com/api/users/:${getUser.id}/favorites`, comment)
    .then((res) => {
      localStorage.setItem(getUser().favorites, res.data)
    })
    .catch((err) => console.log(err.response.data.errors));
  
  return (message);
};

// DELETE A FAVORITE FROM THE LIST

export const axioDeleteFavorite = (comment) => {
  let message = {};
  
  axios
    .delete(`https://only-salty-hackers.herokuapp.com/api/users/:${getUser.id}/favorites`, comment)
    .then((res) => {
      localStorage.setItem(getUser().favorites, getUser().favorites.filter((fav) => fav !== res))
    })
    .catch((err) => console.log(err.response.data.errors));
    
  return (message);
};

// SUBMIT ACCOUNT INFO TO SERVER

export const axioSubmitSignIn = (credentials) => {
  let message = {};
  
  axios
    .post(`https://only-salty-hackers.herokuapp.com/api/login`, credentials)
    .then((res) => {
      console.log (res);
      message = res.data;

      localStorage.setItem('user', JSON.stringify(res.data))
      localStorage.setItem('isLoggedIn', true)
    })
    .catch((err) => console.log(err.response.data.errors));
    
  return (message);
};

// SUBMIT ACCOUNT INFO TO SERVER FOR CREATING A NEW ACCOUNT

export const axioSubmitSignUp = (credentials) => {
  let message = {};
  
  axios
    .post(`https://only-salty-hackers.herokuapp.com/api/register`, credentials)
    .then((res) => {
      console.log (res);
      message = res.data;

      localStorage.setItem('user', JSON.stringify(res.data))
      localStorage.setItem('isLoggedIn', true)
    })
    .catch((err) => console.log(err.response.data.errors));
    
  return (message);
};

// GET LIST OF SALTY USERS

export const axioGetSaltyUsers = () => {
  let message = {};
  
  axios
    .get('https://hackernewsapilambda.herokuapp.com/saltyuser/?format=json')
    .then((res) => {
      console.log (res);
      message = res.data;
    })
    .catch((err) => {
      console.log (err);
      message = errr.response.data;
    });
  
  return (message);
};
