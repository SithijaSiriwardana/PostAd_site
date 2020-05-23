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
import LandColomboAds from './components/ads/LandColomboAds';
import LandOtherAds from './components/ads/LandOtherAds';
import PropertyColomboAds from './components/ads/PropertyColomboAds';
import PropertyOtherAds from './components/ads/PropertyOtherAds';
import InvestorsLocalAds from './components/ads/InvestorsLocalAds';
import InvestorsForeignAds from './components/ads/InvestorsForeignAds';
import BuyandSellAds from './components/ads/BuyandSellAds';
import ServicesAds from './components/ads/ServicesAds';
import JobsAds from './components/ads/JobsAds';
import BusinessesAds from './components/ads/BusinessesAds';
import AccomodationColomboAds from './components/ads/AccomodationColomboAds';
import AccomodationOtherAds from './components/ads/AccomodationOtherAds';
import TravelandTourismAds from './components/ads/TravelandTourismAds';
import VehiclesAds from './components/ads/VehiclesAds';
import EducationAds from './components/ads/EducationAds';
import ImportAds from './components/ads/ImportAds';
import ExportAds from './components/ads/ExportAds';

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
            <Route path='/Land Colombo' component={LandColomboAds} />
            <Route path='/Land Other' component={LandOtherAds} />
            <Route path='/Property Colombo' component={PropertyColomboAds} />
            <Route path='/Property Other' component={PropertyOtherAds} />
            <Route path='/Investors Local' component={InvestorsLocalAds} />
            <Route path='/Investors Foreign ' component={InvestorsForeignAds} />
            <Route path='/Buy and Sell' component={BuyandSellAds} />
            <Route path='/Services' component={ServicesAds} />
            <Route path='/Jobs' component={JobsAds} />
            <Route path='/Businesses' component={BusinessesAds} />
            <Route path='/Accomodation Colombo' component={AccomodationColomboAds} />
            <Route path='/Accomodation Other' component={AccomodationOtherAds} />
            <Route path='/Travel and Tourism' component={TravelandTourismAds} />
            <Route path='/Vehicles' component={VehiclesAds} />
            <Route path='/Education' component={EducationAds} />
            <Route path='/Import' component={ImportAds} />
            <Route path='/Export' component={ExportAds} />
            <Route path='/edit/:id' component={EditAd} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
