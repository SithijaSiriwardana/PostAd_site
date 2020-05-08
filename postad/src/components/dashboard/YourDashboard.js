import React, { Component } from 'react'
import YourAdList from '../ads/YourAdList'
// import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {

    const { ads } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12 l12">
            <YourAdList ads={ads} />
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
    ads: state.firestore.ordered.ads
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'ads', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)