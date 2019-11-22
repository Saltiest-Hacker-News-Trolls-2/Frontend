/// external modules ///
import axiosWithAuth from '../components/AxiosWithAuth';
import axios from 'axios';

/// internal modules ///
import { handleAxiosError } from '../data/remote';

/// urls ///
const corsURL    = 'https://cors-anywhere.herokuapp.com/';
const dsURL      = 'https://hackernewsapilambda.herokuapp.com/saltyuser/?format=json';
const webBaseURL = 'https://only-salty-hackers.herokuapp.com';
const hnBaseURL  = 'https://hacker-news.firebaseio.com';

// ACTION TYPES
export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';
export const DELETE_FAV = 'DELETE_FAV';
export const ADD_FAV = 'ADD_FAV';
export const GET_COMMENTS = 'GET_COMMENTS';

// ACTION FUNCTIONS
/***USER FUNCTIONS***/
// LOGOUT USER
export const logout = () => (dispatch) => {
  localStorage.clear();
  window.location.reload();
  dispatch({ type : LOG_OUT });
};

// GETTING USER DATA FROM LOCAL STORAGE
export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'))
};

// SETTING USER DATA TO LOCAL STORAGE
export const setUser = () => (dispatch) => {
  dispatch({ type : SET_USER , payload : JSON.parse(localStorage.setItem('user')) });;
};
/***AXIOS CALLS***/
// SET USER'S FAVORITES FOR SERVER

export const axioAddFavorite = (comment) => {
  let message = {};

  axiosWithAuth ()
    .post(webBaseURL + `/api/users/:${getUser().id}/favorites`, comment)
    .then((res) => {
      console.log ('--- success! ---');
      console.log (res);

      message = res.data;

      console.log ('Adding favorite...');
      localStorage.setItem(getUser().favorites, res.data);
    })
    .catch((err) => {
      console.log ('--- failure! ---');
      console.log (err);

      message = handleAxiosError (err);
    });

  return (message);
};

// DELETE A FAVORITE FROM THE LIST

export const axioDeleteFavorite = (comment) => (dispatch) => {
  let message = {};
  console.log('function called')
  console.log(getUser().token);
  console.log(comment)
  axiosWithAuth ()
    .delete(webBaseURL + `/api/users/:${getUser().id}/favorites`, comment)
    .then((res) => {
      console.log ('--- success! ---');
      console.log (res);

      message = res.data;

      console.log ('Deleting favorite...');
      dispatch({ type : DELETE_FAV , payload : comment });
      // localStorage.setItem(getUser().favorites, getUser().favorites.filter((fav) => fav !== res));
    })
    .catch((err) => {
      console.log ('--- failure! ---');
      console.log (err);

      message = handleAxiosError (err);
    });

  return (message);
};

// SUBMIT ACCOUNT INFO TO SERVER

export const axioSubmitSignIn = (credentials) => {
  let message = {};

  axiosWithAuth ()
    .post(webBaseURL + '/api/login', credentials)
    .then((res) => {
      console.log ('--- success! ---');
      console.log (res);

      message = res.data;

      console.log ('Signing in...');
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('isLoggedIn', true);
    })
    .catch((err) => {
      console.log ('--- failure! ---');
      console.log (err);

      message = handleAxiosError (err);
    });

  return (message);
};

// SUBMIT ACCOUNT INFO TO SERVER FOR CREATING A NEW ACCOUNT

export const axioSubmitSignUp = (credentials) => {
  let message = {};

  axiosWithAuth ()
    .post(webBaseURL + '/api/register', credentials)
    .then((res) => {
      console.log ('--- success! ---');
      console.log (res);

      message = res.data;

      console.log ('Signing up...');
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('isLoggedIn', true);
    })
    .catch((err) => {
      console.log ('--- failure! ---');
      console.log (err);

      message = handleAxiosError (err);
    });

  return (message);
};

// GET LIST OF SALTY USERS

export const axioGetSaltyUsers = () => {
  let message = {};

  axiosWithAuth ()
    .get(corsURL + dsURL)
    .then((res) => {
      console.log ('--- success! ---');
      console.log (res);

      message = res.data;
      
      console.log ('Saving salty users...');
      this.setState({ 'saltyUsers' : res.slice (0 , 50) });
    })
    .catch((err) => {
      console.log ('--- failure! ---');
      console.log (err);

      message = handleAxiosError (err);
    });

  return (message);
};

// GET USER DATA FROM HACKER NEWS API

export const axioGetHNUser = (user) => {
    axios
        .get(corsURL + hnBaseURL + `/v0/item/${user}.json?print=pretty`)
        .then(res => {
            localStorage.setItem('HNUser', res.data)
        })
        .catch(er => console.log(er))
}

// GET COMMENT DATA FROM HACKER NEWS API

export const axioGetHNComment = (id) => {
    axios
        .get(corsURL + hnBaseURL + `/v0/item/${id}.json?print=pretty`)
        .then(res => {
            localStorage.setItem('HNUserComment', res.data)
        })
        .catch(er => console.log(er))
}
