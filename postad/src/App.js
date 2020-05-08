import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import AdDetails from './components/ads/AdDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateAd from './components/ads/CreateAd'
import YourDashboard from './components/dashboard/YourDashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/ad/:id' component={AdDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateAd} />
            <Route path='/yourads' component={YourDashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
