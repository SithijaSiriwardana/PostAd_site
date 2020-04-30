import React, { Component } from 'react'
import AdList from '../ads/AdList'
// import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {

    const { ads } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <AdList ads={ads} />
          </div>
          {/* <div className="col s12 m5 offset-m1">
            <Notifications />
          </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.ad.ads
  }
}

export default connect(mapStateToProps)(Dashboard)