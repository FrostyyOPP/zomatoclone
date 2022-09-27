import React from 'react'
import { MainHeader } from '../../Components/MainHeader/MainHeader'
import { Card } from '../../Components/Card/Card'
import { Collection } from '../../Components/Collections/Collection'
import { Locations } from '../../Components/Locations/Locations'
import { Cta } from '../../Components/CTA/Cta'


export const Home = () => {
    return (
        <div>
            <MainHeader />
            <div className="container">
                <Card/>
                <Collection />
                <Locations />
            </div>
            <Cta />
        </div>
    )
}
