import React, { Component } from 'react'
import AdList from '../ads/AdList'
// import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {

    const { ads } = this.props;

    return (
      <div className="container">
        <div class="row content">
          <div class="col-md-2">
            <br/>
          <div class="list-group">
          <a href="/Automobiles/" title="Automobiles ads" class="list-group-item"><i class="fa fa-fw fa-Automobiles" aria-hidden="true"></i>Brides (1)</a>
          <a href="/Business/" title="Business ads" class="list-group-item"><i class="fa fa-fw fa-Business" aria-hidden="true"></i>Grooms (79)</a>
          <a href="/Electronics/" title="Electronics ads" class="list-group-item"><i class="fa fa-fw fa-Electronics" aria-hidden="true"></i>Partners (0)</a>
          <a href="/Employment/" title="Employment ads" class="list-group-item"><i class="fa fa-fw fa-Employment" aria-hidden="true"></i>Land Colombo (23)</a>
          <a href="/Automobiles/" title="Automobiles ads" class="list-group-item"><i class="fa fa-fw fa-Automobiles" aria-hidden="true"></i>Land Other(1)</a>
          <a href="/Business/" title="Business ads" class="list-group-item"><i class="fa fa-fw fa-Business" aria-hidden="true"></i>Property Colombo (79)</a>
          <a href="/Electronics/" title="Electronics ads" class="list-group-item"><i class="fa fa-fw fa-Electronics" aria-hidden="true"></i>Property Other (0)</a>
          <a href="/Employment/" title="Employment ads" class="list-group-item"><i class="fa fa-fw fa-Employment" aria-hidden="true"></i>Investors Local (23)</a>
          <a href="/Automobiles/" title="Automobiles ads" class="list-group-item"><i class="fa fa-fw fa-Automobiles" aria-hidden="true"></i>Investors Foreign (1)</a>
          <a href="/Business/" title="Business ads" class="list-group-item"><i class="fa fa-fw fa-Business" aria-hidden="true"></i>Buy and Sell (79)</a>
          <a href="/Electronics/" title="Electronics ads" class="list-group-item"><i class="fa fa-fw fa-Electronics" aria-hidden="true"></i>Services (0)</a>
          <a href="/Employment/" title="Employment ads" class="list-group-item"><i class="fa fa-fw fa-Employment" aria-hidden="true"></i>Jobs (23)</a>
          <a href="/Automobiles/" title="Automobiles ads" class="list-group-item"><i class="fa fa-fw fa-Automobiles" aria-hidden="true"></i>Businesses(1)</a>
          <a href="/Business/" title="Business ads" class="list-group-item"><i class="fa fa-fw fa-Business" aria-hidden="true"></i>Accomodation Colombo(79)</a>
          <a href="/Electronics/" title="Electronics ads" class="list-group-item"><i class="fa fa-fw fa-Electronics" aria-hidden="true"></i>Accomodation Other(0)</a>
          <a href="/Employment/" title="Employment ads" class="list-group-item"><i class="fa fa-fw fa-Employment" aria-hidden="true"></i>Travel and Tourism(23)</a>
          <a href="/Automobiles/" title="Automobiles ads" class="list-group-item"><i class="fa fa-fw fa-Automobiles" aria-hidden="true"></i>Vehicles(1)</a>
          <a href="/Business/" title="Business ads" class="list-group-item"><i class="fa fa-fw fa-Business" aria-hidden="true"></i>Education(79)</a>
          <a href="/Electronics/" title="Electronics ads" class="list-group-item"><i class="fa fa-fw fa-Electronics" aria-hidden="true"></i>Import (0)</a>
          <a href="/Employment/" title="Employment ads" class="list-group-item"><i class="fa fa-fw fa-Employment" aria-hidden="true"></i>Export (23)</a>
          <div align="center" class="left-add">
          </div>
          </div>
          </div>
          <div class="col-md-10 ad-count">
            <AdList ads={ads} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.firestore.ordered.ads
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'ads', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)