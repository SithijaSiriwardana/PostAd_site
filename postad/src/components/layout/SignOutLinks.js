import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Signup</NavLink></li>
        <li><NavLink to='/'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignOutLinks