
import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './header.css';
import { Search } from '../Search/Search'

export const Header = () => {
    return (
        <div className='header'>
        <Navbar />
        <div className="logo">
            <h1 className='logo-text'>Zomato Clone</h1>
            <h2 className='sub-head'>Discover the best food & drinks in your area</h2>
        </div>
        <Search /> 
        </div>
    )
}
