import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Nnavbar = (props) => {
  const { auth, profile } = props;
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
  return (

    <div>
        <Navbar color="light" light expand="lg">
          <NavbarBrand href="/">Post Ad</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar>
            {links}
          </Collapse>
        </Navbar>

    { auth.uid ? "": <div class="jumbotron">
    <div class="container">
    <a href="/"><img src="/images/logo.png" alt="Lanka Ads Logo" class="logo"/></a>
    <p>Welcome to best &amp; fastest Sri Lankan Ad website. Advertise your products and services with us quickly. No Registration/Sign up, Immediate approval without any restrictions.</p>
    <p>
    We are the fastest growing online Ad network in Sri Lanka. The most popular site between young &amp; adults.
    <a class="btn btn-info" href="/postAd.php">Post Your Ad on our site and see amazing results.</a>
    </p>
    </div>
    </div>}
    </div> 

      

    // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    //   <div class="d-flex flex-grow-1">
    //     <span class="w-100 d-lg-none d-block"></span>
    //     <Link to='/' class="navbar-brand">PostAd</Link>
    //     <div class="w-100 text-right">
    //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
    //             <span class="navbar-toggler-icon"></span>
    //         </button>
    //     </div>
    //   </div>
    //   <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
    //     {links}
    //   </div>
    // </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Nnavbar)