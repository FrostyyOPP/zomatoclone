import React from 'react'
import './card.css'

export const Card = () => {
    return (
        <div className='card-section'>
        
            <div className="sec-card" >
                <div className="sec-body">
                    <a href="/order-online" className='link'>
                    <h2 className='card-head'>Order Online</h2>
                    <p className='card-text'>Stay home and order your doorstep</p>
                    </a>
                </div>
            </div>
            <div className="sec-card sec-2">
                <div className="sec-body">
                <a href="/dining" className='link'>

                    <h2 className='card-head'>Dining</h2>
                    <p className='card-text'>View the city's favourite dining venues</p>
                </a>
                </div>
            </div>
        </div>
    )
}
