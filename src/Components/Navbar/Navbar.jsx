import React from 'react'
import { Login } from '../../Popups/Login/Login';
import './navbar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'


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
                        
                    </li>
                    <li>
                        <Popup trigger={<button className='btn login-btn btn-lg'>Login</button> } modal>
                            <Login />
                        </Popup>
                    </li>
                    <li>
                        <a href="" className='navlink'>Sign up</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
