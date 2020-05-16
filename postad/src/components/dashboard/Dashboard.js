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
        {/* <div className="row"> */}
            <AdList ads={ads} />
        {/* </div> */}
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