import React from 'react'
import { LocationCard } from '../LocationCards/LocationCard'
import './location.css'

export const Locations = () => {
  return (
    <div className='locations'>
        <h2 className='location-head'>
        Popular localities in and around <b>Dehradun</b> 
        </h2>

        <div className="locations-card">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </div>
    </div>
  )
}
