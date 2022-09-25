import React from 'react'
import './explore.css'
import { Accordion } from '../Accordion/Accordion'

export const Explore = () => {
  return (
    <div className='explore'>
        <h2 className='exp-head'>Explore options near me</h2>
        <div>
        <Accordion />
        </div>
        <div>
        <Accordion />
        </div>
        <div>
        <Accordion />
        </div>
    </div>
  )
}
