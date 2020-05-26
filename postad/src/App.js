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
import BridesAds from './components/ads/adCategories/BridesAds';
import GroomsAds from './components/ads/adCategories/GroomsAds';
import PartnersAds from './components/ads/adCategories/PartnersAds';
import LandColomboAds from './components/ads/adCategories/LandColomboAds';
import LandOtherAds from './components/ads/adCategories/LandOtherAds';
import PropertyColomboAds from './components/ads/adCategories/PropertyColomboAds';
import PropertyOtherAds from './components/ads/adCategories/PropertyOtherAds';
import InvestorsLocalAds from './components/ads/adCategories/InvestorsLocalAds';
import InvestorsForeignAds from './components/ads/adCategories/InvestorsForeignAds';
import BuyAndSellAds from './components/ads/adCategories/BuyAndSellAds';
import ServicesAds from './components/ads/adCategories/ServicesAds';
import JobsAds from './components/ads/adCategories/JobsAds';
import BusinessesAds from './components/ads/adCategories/BusinessesAds';
import AccomodationColomboAds from './components/ads/adCategories/AccomodationColomboAds';
import AccomodationOtherAds from './components/ads/adCategories/AccomodationOtherAds';
import TravelandTourismAds from './components/ads/adCategories/TravelandTourismAds';
import VehiclesAds from './components/ads/adCategories/VehiclesAds';
import EducationAds from './components/ads/adCategories/EducationAds';
import ImportAds from './components/ads/adCategories/ImportAds';
import ExportAds from './components/ads/adCategories/ExportAds';
import Image from './components/ads/Image';

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
            <Route path='/Buy and Sell' component={BuyAndSellAds} />
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
            <Route path='/image' component={Image} />
            <Route path='/edit/:id' component={EditAd} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
