import React from 'react'
import moment from 'moment'

const YourAdSummary = ({ad}) => {
  return(
    <div className="col s12 m12 l3">
      <div className="card small">
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
  )
}

export default YourAdSummary