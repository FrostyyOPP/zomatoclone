import React from 'react'
import './footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-head container">
                <h1 className='footer-logo'>Zomato Clone</h1>
                <div className="selects">

                    <div className="select-country">
                        <select class="  form-select mb-3" aria-label=".form-select example">
                            <option selected>India</option>
                            <option value="1">Australia</option>
                            <option value="2">England</option>
                            <option value="3">America</option>
                            <option value="4">Canada</option>
                            <option value="5">New Zealand</option>
                            <option value="6">Sri Lanka</option>
                        </select>
                    </div>
                    <div className="select-lang">
                        <select class="  form-select mb-3" aria-label=".form-select example">
                            <option selected>English</option>
                            <option value="1">Hindi</option>
                            <option value="2">Indonesian</option>
                            <option value="3">Portugues</option>
                            <option value="4">Cestina</option>
                            <option value="5">Italian</option>
                            <option value="6">Espanol</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="footer-body">

                <div className="about">
                    <p className='footer-links-head'>ABOUT ZOMATO</p>
                    <ul className='footer-links'>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Who We Are</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Blog</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Work With Us</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Inveator Relations</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Report Fraud</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="verse">
                    <p className='footer-links-head'>ZOMAVERSE</p>
                    <ul className='footer-links'>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Zomato</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Feeding India</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Hyperpure</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Zomaland</a>
                        </li>
                    </ul>
                </div>
                <div className="for-rest">
                    <p className='footer-links-head'>FOR RESTAURANTS</p>
                    <ul className='footer-links'>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Partner With Us</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Apps For You</a>
                        </li>
                    </ul>
                    <p className='footer-links-head'>FOR ENTERPRISES</p>

                    <ul>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Zomato For Work</a>
                        </li>
                    </ul>
                </div>
                <div className="learn">
                    <p className='footer-links-head'>LEARN MORE</p>
                    <ul className='footer-links'>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Privacy</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Security</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Terms</a>
                        </li>
                        <li className='footer-link-list'>
                            <a href="" className='footer-link'>Sitemap</a>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <p className='footer-links-head'>SOCIAL LINKS</p>
                    <div className="socials">
                        <div className="icon">
                            <i class="fa fa-linkedin"></i>
                        </div>
                        <div className="icon">
                            <i class="fa fa-instagram"></i>
                        </div>
                        <div className="icon">
                            <i class="fa fa-twitter"></i>
                        </div>
                        <div className="icon">
                            <i class="fa fa-youtube"></i>
                        </div>
                        <div className="icon">
                            <i class="fa fa-facebook"></i>
                        </div>
                    </div>

                    <div className="footer-stores">
                    <img className='footer-store' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" /> 
                    <img  className='footer-store' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyrights'>
            <i class="fa fa-copyright"></i>
                For Leaning Purpose Only  By:- Ranjodh Singh</p>
        </div>
    )
}
