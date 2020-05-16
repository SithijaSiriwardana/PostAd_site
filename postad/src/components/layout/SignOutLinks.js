import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
  return (
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
      <ul class="navbar-nav ml-auto flex-nowrap">
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignOutLinks