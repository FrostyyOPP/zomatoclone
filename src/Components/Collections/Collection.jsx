import React from 'react'
import { CollectCard } from '../Collect-Card/CollectCard'
// import bestof from '.../images/bestof'
import './collections.css'

export const Collection = () => {
  return (
    <div className='collections'>
        <div className="col-head">
            <h2 className='head'>Collections</h2>
            <p className='text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Dehradun, based on trends</p>
        </div>
        <div className="collect-cards">
        <CollectCard name={'Great Cafes'} places={'26'} img ={'https://dx6iy6yk2x0g.cloudfront.net/images/945/b1c/945b1cddf650bc612b01a34ea28f617d51b17901-x425.jpg?compressionQuality=80&id=57fe6d27ab9453b8353e6181&op=scale&version=1'} />
        <CollectCard name={'Best of Your Area'} places={'20'} img= {'https://i0.wp.com/kohleyedme.com/wp-content/uploads/2019/01/Monastery-1.jpg?w=683&ssl=1'}/>
        <CollectCard name={'Sweet Tooth'} places={'6'} img={'https://inspiredbycharm.com/wp-content/uploads/2017/03/cupcake-sprinkles.jpg'}/>
        <CollectCard name={'Family Friendly'} places={'17'} img={'https://media-cdn.tripadvisor.com/media/photo-s/0d/8b/82/2c/lunch-at-dishoom.jpg'}/>
        </div>

    </div>
  )
}
