import React from 'react'
import moment from 'moment'

const MAX_LENGTH = 150;
const AdSummary = ({ad}) => {
  return(

    <div class="col s12 m12 l4">
    <div class="card horizontal" style={{height:300}}>
      {/* <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6">
      </div> */}
      <div class="card-stacked">
        <div class="card-content">
          <div className="card-title">
          <span className="black-text">{ad.title}</span>
          </div>
          <p maxWidth="50ch">{`${ad.content.substring(0, MAX_LENGTH)}...`}</p>
        </div>
        <div class="card-action">
          <p className="black-text">Contact: {ad.authorFirstName} {ad.authorLastName}
          <br/>Phone No: {ad.contactno}
          <br/>Date: {moment(ad.createdAt.toDate()).format('LLL')}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}


export default AdSummary