import React from 'react';
import './cta.css';

export const Cta = () => {
  return (
    <div className='cta'>
        <div className="cta-tag">
            <img className='cta-img' src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png" alt="" />
        </div>
        <div className="cta-body">
            <h2 className='cta-head'>Set the Zomato Clone app</h2>
            <p className='cta-text'>we will send you a link, open it on your phone to download <br /> the app</p>

            <div className="radios">
            <div className="radio-email radio">
            <input type="radio" id='email' name='cta'/>
            <label htmlFor="email">Email</label>
            </div>
            <div className="radio-phone radio">
            <input type="radio" id='phone' name='cta'/>
            <label htmlFor="phone">Phone</label>
            </div>
            </div>

            <form action="" className='form mt-2'>
                <input type="text" placeholder='Email' className='form-control-lg'/>
                <button className='btn btn-danger btn-lg'>Share App Link</button>
            </form>

            <div className="download">
                <p className='cta-text-2'>Download app from</p>

                <img className='store' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                <img  className='store' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
            </div>
        </div>
    </div>
  )
}
