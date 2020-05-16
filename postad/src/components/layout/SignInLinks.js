import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignInLinks = (props) => {
  return (
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
      <ul class="navbar-nav ml-auto flex-nowrap">
        <li class="nav-item"><NavLink to='/create'>New Ad</NavLink></li>
        <li class="nav-item"><NavLink to='/yourads'>Your ads</NavLink></li>
        <li class="nav-item"><a onClick={props.signOut}>Log Out</a></li>
        <li class="nav-item"><NavLink to='/' className="btn btn-floating pink lighten-1">
        {props.profile.initials}  
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLinks)