import React from 'react'
import './miniheader.css'
import { Search } from '../Search/Search'
import { SmallNav } from '../SmallNav/SmallNav'

export const MiniHeader = () => {
  return (
    <div className='small-header'>
      <div className="mini-logo">
        <a href="/" className='link'>
        <h2 className='logo-text'>Zomato</h2>
        </a>
        <Search />
      </div>

      <div className="small-nav">
        <SmallNav />
      </div>
    </div>
  )
}
