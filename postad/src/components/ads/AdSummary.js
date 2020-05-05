import React from 'react'
import moment from 'moment'

const AdSummary = ({ad}) => {
  return(
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
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdSummary