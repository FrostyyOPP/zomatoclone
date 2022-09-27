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
            <LocationCard locationName = {'Rajpur'} places={'180 places'}/>
            <LocationCard locationName = {'Jakhan'} places={'179 places'}/>
            <LocationCard locationName = {'Hathibarwala salwala'} places={'108 places'}/>
            <LocationCard locationName = {'Chukkuwala'} places={'96 places'}/>
            <LocationCard locationName = {'Karanpur'} places={'194 places'}/>
            <LocationCard locationName = {'Balupur'} places={'133 places'}/>
            <LocationCard locationName = {'Paltan Bazaar'} places={'136 places'}/>
            <LocationCard locationName = {'Balliwala'} places={'113 places'}/>
            <LocationCard locationName = {'See More'} />
          
        </div>
    </div>
  )
}
