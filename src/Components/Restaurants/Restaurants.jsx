import React from 'react'
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'

export const Restaurants = () => {
  return (
    <div className='restaurants container'>
        <h1 className='restro-head mx-5'>Delivery Restaurants</h1>
        <div className="resto-cards container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        </div>
    </div>
  )
}
