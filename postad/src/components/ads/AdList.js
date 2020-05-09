import React from 'react'
import AdSummary from './AdSummary'
import { Link } from 'react-router-dom'


const AdList = ({ads}) => {
  return (
    <div className = "row">
      { ads && ads.map(ad => {
        return (
          
          <Link to={'/ad/' + ad.id} key={ad.id}>
            <AdSummary ad={ad} />
          </Link>
    
        )
      })}  
    </div>
  )
}

export default AdList