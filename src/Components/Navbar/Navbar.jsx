import React from 'react'
import './navbar.css';

export const Navbar = () => {
  return (
    <div className="top-nav">
        <nav>
            <a href="" className='navlink'>
            <span className="material-symbols-outlined">install_mobile</span>Get the App
            </a>
        </nav>

        <nav className='nav-bar'>
            <ul className='navlinks'>
                <li>
                    <a href="" className='navlink'>Investor Relations</a>
                </li>
                <li>
                    <a href="" className='navlink'>Add Restaurant</a>
                </li>
                <li>
                    <a href="" className='navlink'>Log in</a>
                </li>
                <li>
                    <a href="" className='navlink'>Sign up</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
