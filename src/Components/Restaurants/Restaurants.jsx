import React from 'react'
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'

export const Restaurants = () => {
  return (
    <div className='restaurants container'>
        <h1 className='restro-head mx-5'>Delivery Restaurants</h1>
        <div className="resto-cards container">
        <RestaurantCard restroName={"Domino's Pizza"} restroCat={"Pizza, Fast Food"} price={'200'} rating={'4.3'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/chains/8/3500058/0b0e4ec4915345d164d07f56548b7920_o2_featured_v2.jpg?output-format=webp'} />
        <RestaurantCard restroName={"Math's Chinese"} restroCat={"Chinese, Momos"} price={'200'} rating={'4.1'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/3/18937433/f8714403b5aea2364fbe969017e2ac74_o2_featured_v2.jpg?output-format=webp'} />
        <RestaurantCard restroName={"Bhura Chicken Corner"} restroCat={"North Indian, Chinese"} price={'200'} rating={'4.0'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/7/3500287/3f646481018cd0aac296bfdc569f913b_o2_featured_v2.jpg?output-format=webp'} />
        <RestaurantCard restroName={"Biryani Mension"} restroCat={"North Indian, Biryani"} price={'200'} rating={'3.6'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/chains/4/19059294/7d85e8d078067800938e8759f4e0f83d_o2_featured_v2.jpg?output-format=webp'} />
        <RestaurantCard restroName={"Wini's Cakes and More"} restroCat={"Bakery, Deserts"} price={'200'} rating={'4.1'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/chains/0/19696280/2902e9c0d64c5998912d45bb70d6c3d4_o2_featured_v2.jpg?output-format=webp'} />
        <RestaurantCard restroName={"Bikanerwala"} restroCat={"Mithai, Fast Food"} price={'200'} rating={'3.8'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/chains/3/3500483/fba01c7a0a33fe1d4b2a48ad364e55ec_o2_featured_v2.jpg?output-format=webp'} />
        <RestaurantCard restroName={"BakeMasters"} restroCat={"Bakery, Fast Food"} price={'200'} rating={'4.2'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/0/3500430/d337dae8097435fb089ae8c7d455edb4_o2_featured_v2.jpg?output-format=webp'} />
        <RestaurantCard restroName={"Shree Gopal Ji Ki Hatti"} restroCat={"Street Food, North Indian"} price={'200'} rating={'4.2'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/chains/3/19670543/ba3b4f48356186e69c5072add9c69699_o2_featured_v2.jpg?output-format=webp'} />
        <RestaurantCard restroName={"Chawlas2 Since 1960"} restroCat={"Mughlai, North Indian"} price={'200'} rating={'3.6'} 
        restroImg={'https://b.zmtcdn.com/data/pictures/7/3501747/9c6f7ef778bcd22fc25f946de77659f5_o2_featured_v2.jpg?output-format=webp'} />

        </div>
    </div>
  )
}
