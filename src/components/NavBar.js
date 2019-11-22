/// external modules ///
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

/// internal modules ///
import { logout } from '../actions'

/// app data ///
import { routes } from './data/app-routes';
import { isSignedIn } from './data/app-states';

/// styles ///
import '../styles/navbar.css';


function NavBar(props) {
    if(localStorage.isLoggedIn === 'true'){
        return(
            <div className='nav-bar'>
                <div className='logo-container'>
                    <h1 className="site-title">λ-Saltinator</h1>
                    <img className='logo-img' src="https://d33wubrfki0l68.cloudfront.net/df68882fa6d8db24b2afa5558fbe428ac2b52c05/8008e/assets/salt.svg" alt="salt shaker icon" />
                </div>
                <div className='nav-links'>
                    <NavLink className='nav-link' to='/'>
                        Home
                    </NavLink>
                    <a href='https://saltinator.netlify.com/'>
                        About
                    </a>
                    <NavLink to='/user/account'>
                        Account
                    </NavLink>
                    <a href='/' className='logout' onClick={() => {
                        props.logout()
                    }}>
                        Log Out
                    </a>
                </div>
            </div>
        )
    } else {
        return(
            <div className='nav-bar'>
                <div className='logo-container'>
                    <h1 className="site-title">λ-Saltinator</h1>
                    <img className='logo-img' src="https://d33wubrfki0l68.cloudfront.net/df68882fa6d8db24b2afa5558fbe428ac2b52c05/8008e/assets/salt.svg" alt="salt shaker icon" />
                </div>
                <div className='nav-links'>
                    <NavLink className='nav-link' to='/'>
                        Home
                    </NavLink>
                    <a href='https://saltinator.netlify.com/'>
                        About
                    </a>
                    <NavLink to='/user/sign-in'>
                        Sign In
                    </NavLink>
                    <NavLink to='/user/sign-up'>
                        Sign Up
                    </NavLink>
                </div>
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
