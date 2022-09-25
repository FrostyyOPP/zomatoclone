import React from 'react'
import './locationcard.css'

export const LocationCard = ({ locationName, places }) => {
  return (
    <div className='loc-card'>
        <div className="city-name">
            <h4>{locationName}</h4>
            <p>{places}</p>
        </div>
        <div className="sign">
        <i class="fa fa-angle-right"></i>
        </div>

    </div>
  )
}
