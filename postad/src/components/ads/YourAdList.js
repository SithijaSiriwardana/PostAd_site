import React from 'react'
import YourAdSummary from './AdSummary'
import { Link } from 'react-router-dom'


const YourAdList = ({ads}) => {
  return (
    <div class="col-md-10 rounded-div">
      { ads && ads.map(ad => {
        return (
          
          <Link to={'/ad/' + ad.id} key={ad.id}>
            <YourAdSummary ad={ad} />
          </Link>
    
        )
      })}  
    </div>
  )
}

export default YourAdList