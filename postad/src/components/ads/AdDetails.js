import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const AdDetails = (props) => {
  const { ad } = props;
  if (ad) {
    return (
      <div className="container section ad-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ad.title}</span>
            <p>{ad.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {ad.authorFirstName} {ad.authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading ad...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const ads = state.firestore.data.ads;
  const ad = ads ? ads[id] : null
  return {
    ad: ad
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'ads'
  }])
)(AdDetails)