import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nnavbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import AdDetails from './components/ads/AdDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateAd from './components/ads/CreateAd'
import YourDashboard from './components/dashboard/YourDashboard'
import EditAd from './components/ads/EditAd'
import BridesAds from './components/ads/BridesAds';
import GroomsAds from './components/ads/GroomsAds';
import PartnersAds from './components/ads/PartnersAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';
import GroomsAds from './components/ads/GroomsAds';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nnavbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/ad/:id' component={AdDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateAd} />
            <Route path='/yourads' component={YourDashboard} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Grooms' component={GroomsAds} />
            <Route path='/Partners' component={PartnersAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/Brides' component={BridesAds} />
            <Route path='/edit/:id' component={EditAd} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
