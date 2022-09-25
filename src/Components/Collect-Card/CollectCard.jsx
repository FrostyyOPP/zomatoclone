import React from 'react';
import './collectcard.css'

export const CollectCard = () => {
    return (
        <div className='collect-cards'>

            <div className="card" >
                <img src="https://static.wixstatic.com/media/74ecb2_f5f5becf16934cdc81c93b8ccc157057~mv2.jpg/v1/crop/x_0,y_19,w_1672,h_1265/fill/w_1238,h_936,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brooke-lark-GTMGG-xvxdU-unsplash_edited_.jpg" className="card-img-top" alt="..." />

                <p className="card-texts">Trending This Week
                    <br />
                    30 places <i className="fa fa-arrow-right"></i>
                </p>
            </div>
            
        </div>
    )
}
