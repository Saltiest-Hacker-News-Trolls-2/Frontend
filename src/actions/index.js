import axiosWithAuth from '../components/AxiosWithAuth'
import axios from 'axios'

// ACTION TYPES
export const SET_USER = 'SET_USER'
export const LOG_OUT = 'LOG_OUT'


// ACTION FUNCTIONS
/***USER FUNCTIONS***/
// LOGOUT USER
export const logout = () => dispatch => {
    localStorage.clear()
    dispatch({type:LOG_OUT})
}
// GETTING USER DATA FROM LOCAL STORAGE
export const getUser = () => dispatch => {
    dispatch({type: SET_USER, payload: JSON.parse(localStorage.getItem('user'))})
}

/***AXIOS CALLS***/
// GET LIST OF SALTY COMMENTORS


// 

