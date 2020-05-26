import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'


const AdDetails = (props) => {
  const { ad, auth } = props;
  // let history = useHistory()
  if (ad) {
    return (
      <div className="dashboard container">
      <div class="card horizontal">
      <div class="row no-gutters">
      { ad.avatarURL? <div class="col-md-4">
          <img class="card-img" src={ad.avatarURL}></img>
      </div>:""}


    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{ad.title}</h5>
        <p class="card-text">{ad.content}</p>
        <div class="card-action">
            <p className="black-text">Contact: {ad.authorFirstName} {ad.authorLastName}
            <br/>Phone No: {ad.contactno}
            <br/>Date: {moment(ad.createdAt.toDate()).format('LLL')}
            </p>
            { auth.uid==ad.authorId ? <div class="col-sm-12 text-right">
            <Link to={'/edit/' + props.match.params.id} key={props.match.params.id}><button  className="btn btn-default" >Edit</button></Link>
               {/* <button class="btn btn-primary" id="btn2" name="btn2" value="2" type="submit">Delete</button> */}
           </div> : ""}
          </div>
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
    ad: ad,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'ads'
  }])
)(AdDetails)