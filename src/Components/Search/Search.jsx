import React from 'react'
import './search.css'

export const Search = () => {
  return (
    <div className="input-group input-group-lg search">
      <span className="input-group-text" id="inputGroup-sizing-lg">
        <span className="material-symbols-outlined">
        search
      </span></span>
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Search for restaurant, cuisine or a dish...' />
    </div>
  )
}
