import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const SignOutLinks = () => {
  return (
    <Nav className="ml-auto" navbar>
    <NavItem>
        <NavLink href="/signup">Signup</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="/signin">Login</NavLink>
    </NavItem>
    </Nav>
    // <div>
    //   <ul class="navbar-nav ml-auto flex-nowrap">
    //     <li><NavLink to='/signup'>Signup</NavLink></li>
    //     <li><NavLink to='/signin'>Login</NavLink></li>
    //   </ul>
    // </div>
  )
}

export default SignOutLinks