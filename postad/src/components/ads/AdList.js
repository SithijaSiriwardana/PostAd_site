import React from 'react'
import AdSummary from './AdSummary'
import { Link } from 'react-router-dom'


const AdList = ({ads}) => {
  return (
    <div className="row">
      { ads && ads.map(ad => {
        return (
          <div class="col-sm-6 col-md-6">
          <Link to={'/ad/' + ad.id} key={ad.id}>
            <AdSummary ad={ad} />
          </Link>
          </div>
        )
      })}  
    </div>
  )
}

export default AdList