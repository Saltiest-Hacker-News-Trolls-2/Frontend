import axiosWithAuth from '../components/AxiosWithAuth'
import axios from 'axios'
import { hashHistory } from 'react-router-dom'

// ACTION TYPES
export const SET_USER = 'SET_USER'
export const LOG_OUT = 'LOG_OUT'
export const DELETE_FAV = 'DELETE_FAV'
export const ADD_FAV = 'ADD_FAV'
export const GET_COMMENTS = 'GET_COMMENTS'


// ACTION FUNCTIONS
/***USER FUNCTIONS***/
// LOGOUT USER
export const logout = () => dispatch => {
    localStorage.clear()
    window.location.reload();
    dispatch({type:LOG_OUT})
}
// GETTING USER DATA FROM LOCAL STORAGE
export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}

// SETTING USER DATA TO LOCAL STORAGE
export const setUser = () => dispatch => {
    dispatch({type: SET_USER, payload: JSON.parse(localStorage.setItem('user'))})
}
/***AXIOS CALLS***/
// SET USER'S FAVORITES FOR SERVER

export const axioAddFav = (comment) => {
    axiosWithAuth()
        .post(`https://only-salty-hackers.herokuapp.com/api/users/:${JSON.parse(localStorage.getItem('user')).id}/favorites`, comment)
        .then(res => {
            console.log(res)
            localStorage.setItem(getUser().favorites, res.data)
        })
        .catch(er => console.log(er.response.data.errors))
}

// DELETE A FAVORITE FROM THE LIST

export const axioDeleteFavorite = (comment) => dispatch => {
    axiosWithAuth()
        .delete(`https://only-salty-hackers.herokuapp.com/api/users/:${getUser.id}/favorites`, comment)
        .then(res => {
            console.log('Fav deleted', res)
            dispatch({type: DELETE_FAV, payload: comment})
        })
        .catch(er => console.log(er.response.data.errors))
}

// SUBMIT ACCOUNT INFO TO SERVER

export const axioLoginSubmit = (credentials) => {
    axios
        .post(`https://only-salty-hackers.herokuapp.com/api/login`, credentials)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            localStorage.setItem('isLoggedIn', true)
        })
        .catch(er => console.log(er.response.data.errors))
}

// SUBMIT ACCOUNT INFO TO SERVER FOR CREATING A NEW ACCOUNT

export const axioSignUpSubmit = (credentials) => {
    axios
        .post(`https://only-salty-hackers.herokuapp.com/api/register`, credentials)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            localStorage.setItem('isLoggedIn', true)
        })
        .catch(er => console.log(er.response.data.errors))
}

// GET LIST OF SALTY COMMENT

export const axioGetComments = () => {
    axios
        .get('https://cors-anywhere.herokuapp.com/' + 'https://hackernewsapilambda.herokuapp.com/saltyuser/?format=json')
        .then(res => {
            let temp = [{}]
            for(let i = 0; i < 50; i++){
              temp[i] = res.data[i]
            }
            this.setState({ comments: temp })
        })
        .catch(er => console.log(er))
}

// GET USER DATA FROM HACKER NEWS API

export const axioGetHNUser = (user) => {
    axios
        .get('https://cors-anywhere.herokuapp.com/' + `https://hacker-news.firebaseio.com/v0/item/${user}.json?print=pretty`)
        .then(res => {
            localStorage.setItem('HNUser', res.data)
        })
        .catch(er => console.log(er))
}

// GET COMMENT DATA FROM HACKER NEWS API

export const axioGetHNComment = (id) => {
    axios
        .get('https://cors-anywhere.herokuapp.com/' + `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(res => {
            localStorage.setItem('HNUserComment', res.data)
        })
        .catch(er => console.log(er))
}