import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
  return (
    <div>
      <ul class="navbar-nav ml-auto flex-nowrap">
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignOutLinks