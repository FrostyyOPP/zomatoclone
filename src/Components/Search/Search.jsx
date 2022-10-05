import React from 'react'
import './search.css'

export const Search = () => {
  return (
    <div className="input-group input-group-lg">
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Search for restaurant, cuisine or a dish...' />
    </div>
  )
}
