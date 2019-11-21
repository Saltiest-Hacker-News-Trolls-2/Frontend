import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions'

function NavBar(props) {
    if(localStorage.isLoggedIn === 'true'){
        return(
            <div className='nav-bar'>
                <NavLink className='nav-link' to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/user/account'>
                    Account
                </NavLink>
                <a href='#' className='logout' onClick={() => {
                    props.logout()
                }}>
                    Log Out
                </a>
            </div>
        )
    } else {
        return(
            <div className='nav-bar'>
                <NavLink className='nav-link' to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/user/sign-in'>
                    Sign In
                </NavLink>
                <NavLink to='/user/sign-up'>
                    Sign Up
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user
    }
}
  
export default connect(mapStateToProps, { logout })(NavBar);