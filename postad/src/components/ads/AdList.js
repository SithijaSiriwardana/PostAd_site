import React from 'react'
import AdSummary from './AdSummary'

const AdList = ({ads}) => {
  return (
    <div className="project-list section">
      { ads && ads.map(ad => {
        return (
          <AdSummary ad={ad} key={ad.id} />
        )
      })}  
    </div>
  )
}

export default AdList