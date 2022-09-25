import React from 'react'
import { CollectCard } from '../Collect-Card/CollectCard'
import './collections.css'

export const Collection = () => {
  return (
    <div className='collections'>
        <div className="col-head">
            <h2 className='head'>Collections</h2>
            <p className='text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Dehradun, based on trends</p>
        </div>
        <div className="collect-cards">
        <CollectCard />
        <CollectCard />
        <CollectCard />
        <CollectCard />
        </div>

    </div>
  )
}
