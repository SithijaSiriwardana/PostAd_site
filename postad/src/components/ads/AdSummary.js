import React from 'react'

const AdSummary = ({ad}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{ad.title}</span>
  <p>Posted by The {ad.authorFirstName} {ad.authorLastName}</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default AdSummary