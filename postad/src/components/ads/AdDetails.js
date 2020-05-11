import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import { useHistory } from 'react-router-dom';


const AdDetails = (props) => {
  const { ad } = props;
  let history = useHistory()
  if (ad) {
    return (
      // console.log(props.match.params.id),
      <div class="row">
      <div class="col s12 m8">
      <div class="card">
        <div class="card-image">
          <img src={ad.avatarURL}></img>
          <span class="card-title">{ad.title}</span>
        </div>
        <div class="card-content">
          <p>{ad.content}</p>
          <p>Posted by The {ad.authorFirstName} {ad.authorLastName}</p>
          <p className="grey-text">{moment(ad.createdAt.toDate()).calendar()}</p>
          <div class="col-sm-12 text-right">
            <button onClick={() => history.push(`/edit/${props.match.params.id}`)}  className="btn btn-default" >Edit</button>
            <button class="btn btn-primary" id="btn2" name="btn2" value="2" type="submit">Delete</button>
          </div>
        </div>
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