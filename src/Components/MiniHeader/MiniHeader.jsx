import React from 'react'
import './miniheader.css'
import { Search } from '../Search/Search'
import { SmallNav } from '../SmallNav/SmallNav'

export const MiniHeader = () => {
  return (
    <div className='container small-header'>
        <div className="mini-logo">
            <h2 className='logo-text'>Zomato Clone</h2>
        </div>
        <div className="search">
            {/* <Search /> */}
        </div>
        <div className="small-nav">
            <SmallNav />
        </div>
    </div>
  )
}
