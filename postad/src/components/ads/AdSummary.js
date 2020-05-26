import React from 'react'
import moment from 'moment'

const MAX_LENGTH = 150;
const AdSummary = ({ad}) => {
  return(
    // <div class="col-sm-6 col-md-4">
    <div class="card" style={{maxWidth:540}}>
      <div class="row no-gutters">
      { ad.avatarURL? <div class="col-md-4">
          <img class="img-responsive fit-image" src={ad.avatarURL}></img>
      </div>:""}


    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">{ad.title}</h3>
        <p class="card-text" maxWidth="50ch">{`${ad.content.substring(0, MAX_LENGTH)}...`}</p>
      </div>
      <div class="card-footer">
            <p className="black-text">Contact: {ad.authorFirstName} {ad.authorLastName}
            <br/>Phone No: {ad.contactno}
            <br/>Date: {moment(ad.createdAt.toDate()).format('LLL')}
            </p>
          </div>
    </div>

  </div>
  </div>
  // {/* </div> */}

  )
}


export default AdSummary