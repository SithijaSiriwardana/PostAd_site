import React from 'react'
import moment from 'moment'

const AdSummary = ({ad}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{ad.title}</span>
  <p>Posted by The {ad.authorFirstName} {ad.authorLastName}</p>
        <p className="grey-text">{moment(ad.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default AdSummary