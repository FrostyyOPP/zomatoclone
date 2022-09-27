import React from 'react'
import './restaurantcard.css'

export const RestaurantCard = () => {
  return (
    <div className='restro-card'>
        <div className="restro-head">
            <img className='restro-img' src="https://b.zmtcdn.com/data/pictures/chains/4/19441804/4ade34afeaaa2a1b5661b1e82d4d1c29_o2_featured_v2.jpg" alt="" />
        </div>
        <div className="restro-body">
            <div className="restro-names">
            <h4>Da Mexico Pizza</h4>
            <p className='restro-cat'>Pizza, Itaian, Fast Food</p>
            </div>
            <div className="restro-rating">
                <div className="rating">
                    <h6>4.1 <i class="fa fa-star"></i></h6>
                </div>
                <div className="restro-price">
                    <p>&#x20b9;200 for one</p>
                </div>
            </div>
        </div>
    </div>
  )
}
