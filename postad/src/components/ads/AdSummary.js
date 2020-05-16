import React from 'react'
import moment from 'moment'

const MAX_LENGTH = 150;
const AdSummary = ({ad}) => {
  return(

    <div class="col s12 m12 l4">
    <div class="card horizontal" style={{height:300}}>
      <div class="row no-gutters">
      { ad.avatarURL? <div class="col-md-4">
          <img class="img-responsive fit-image" src={ad.avatarURL}></img>
      </div>:""}


    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{ad.title}</h5>
        <p maxWidth="50ch">{`${ad.content.substring(0, MAX_LENGTH)}...`}</p>
        <div class="card-action">
            <p className="black-text">Contact: {ad.authorFirstName} {ad.authorLastName}
            <br/>Phone No: {ad.contactno}
            <br/>Date: {moment(ad.createdAt.toDate()).format('LLL')}
            </p>
          </div>
      </div>
    </div>

  </div>
  </div>


    {/* <div class="card horizontal" style={{height:300}}>
    { ad.avatarURL? <div class="col-md-4">
      <img class="responsive-img" src={ad.avatarURL}/>
    </div>:""}
    <div class="col-md-8">
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
    </div> */}
  </div>
  )
}


export default AdSummary