import React from 'react';
import './collectcard.css';
 

export const CollectCard = ({ name, places, img }) => {
    return (
        <div className='collect-cards'>

            <div className="card" >
                <img src= {img} className="card-img-top" alt="images" />

                <p className="card-texts">{name}
                    <br />
                    {places} places <i className="fa fa-arrow-right"></i>
                </p>
            </div>
            
        </div>
    )
}
