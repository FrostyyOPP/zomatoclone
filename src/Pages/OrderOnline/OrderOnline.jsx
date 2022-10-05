import React from 'react'
import { MiniHeader } from '../../Components/MiniHeader/MiniHeader'
import { Restaurants } from '../../Components/Restaurants/Restaurants'
import { Slider } from '../../Components/Slider/Slider'

export const OrderOnline = () => {
  return (
    <div>
        <MiniHeader />
        <Slider />
        <div className="ren-restro">
        <Restaurants />
        </div>
    </div>
  )
}
