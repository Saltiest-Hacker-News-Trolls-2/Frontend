/// external modules ///
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

/// internal modules ///
import { logout } from '../actions'

/// app data ///
import { routes , fullURL } from '../data/app-routes';
import { isSignedIn } from '../data/app-states';

/// styles ///
import '../styles/navbar.css';


function NavBar (props) {
  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <h1 className='site-title'>λ-Saltinator</h1>
        <img
        className='logo-img'
        src={routes.WEB.logo}
        alt='salt shaker icon'
        />
      </div>
      <div className='nav-links'>
        <NavLink
        className='nav-link'
        to={routes.here.FE.path.home}>
          Home
        </NavLink>
        <a
        href={fullURL (routes.here.UI , 'home')}>
          About
        </a>
        { isSignedIn () ? (<>
          <NavLink
          to={routes.here.FE.path.user_account}>
            Account
          </NavLink>
          <a
          className='logout'
          href={routes.here.FE.path.home}
          onClick={() => {
            props.logout()
          }}>
            Log Out
          </a>
        </>) : (<>
          <NavLink
          to={routes.here.FE.path.user_sign_in}>
            Sign In
          </NavLink>
          <NavLink
          to={routes.here.FE.path.user_sign_up}>
            Sign Up
          </NavLink>
        </>)
        }
      </div>
    </div>
  );
  // if (isSignedIn ()){
  //   return (
  //     <div className='nav-bar'>
  //       <div className='logo-container'>
  //         <h1 className='site-title'>λ-Saltinator</h1>
  //         <img className='logo-img' src={routes.WEB.logo} alt='salt shaker icon' />
  //       </div>
  //       <div className='nav-links'>
  //         <NavLink className='nav-link' to={routes.here.FE.path.home}>
  //           Home
  //         </NavLink>
  //         <a href={fullURL (routes.here.UI , 'home')}>
  //           About
  //         </a>
  //         <NavLink to={routes.here.FE.path.user_account}>
  //           Account
  //         </NavLink>
  //         <a href={routes.here.FE.path.home} className='logout' onClick={() => {
  //           props.logout()
  //         }}>
  //           Log Out
  //         </a>
  //       </div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className='nav-bar'>
  //       <div className='logo-container'>
  //         <h1 className='site-title'>λ-Saltinator</h1>
  //         <img className='logo-img' src={routes.WEB.logo} alt='salt shaker icon' />
  //       </div>
  //       <div className='nav-links'>
  //         <NavLink className='nav-link' to={routes.here.FE.path.home}>
  //           Home
  //         </NavLink>
  //         <a href={fullURL (routes.here.UI , 'home')}>
  //           About
  //         </a>
  //         <NavLink to={routes.here.FE.path.user_sign_in}>
  //           Sign In
  //         </NavLink>
  //         <NavLink to={routes.here.FE.path.user_sign_up}>
  //           Sign Up
  //         </NavLink>
  //       </div>
  //     </div>
  //   )
  // }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logout })(NavBar);
