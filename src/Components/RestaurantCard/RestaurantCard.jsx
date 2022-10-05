import React from 'react'
import './restaurantcard.css'

export const RestaurantCard = ({ restroName, restroCat, rating, price,restroImg }) => {
  return (
    <div className='restro-card'>
        <div className="restro-head">
            <img className='restro-img' src={restroImg} alt="" />
        </div>
        <div className="restro-body">
            <div className="restro-names">
            <h4>{ restroName }</h4>
            <p className='restro-cat'>{ restroCat }</p>
            </div>
            <div className="restro-rating">
                <div className="rating">
                    <h6>{ rating } <i class="fa fa-star"></i></h6>
                </div>
                <div className="restro-price">
                    <p>&#x20b9;{ price } for one</p>
                </div>
            </div>
        </div>
    </div>
  )
}
