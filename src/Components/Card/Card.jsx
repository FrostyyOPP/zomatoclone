import React from 'react'
import './card.css'

export const Card = () => {
    return (
        <div className='card-section'>
            <div className="sec-card" onClick={'/OrderOnline'}>
                <div className="sec-body">
                    <h2 className='card-head'>Order Online</h2>
                    <p className='card-text'>Stay home and order your doorstep</p>
                </div>
            </div>
            <div className="sec-card sec-2">
                <div className="sec-body">
                    <h2 className='card-head'>Dining</h2>
                    <p className='card-text'>View the city's favourite dining venues</p>
                </div>
            </div>
        </div>
    )
}
