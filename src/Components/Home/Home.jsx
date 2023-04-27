import React from 'react'
import DownPart from '../DownPart/DownPart'
import Carousels from './Carousels/Carousels'
import HomeCard from './HomeCard/HomeCard'

const Home = () => {
    return (
        <div>
            <div style={{ maxHeight: "50" }} ><Carousels /></div>
            <div style={{ background: "silver", maxWidth: "100%", justifyContent: 'space-between' }} className="d-lg-flex " >
                <HomeCard title="NO WAITING TIME !!" text="Just place your order here and No need to wait at queue ever, that will be taken care by us !! ⏲⏳ " />
                <HomeCard title="ZERO MINIMUM ORDER !!" text="Order in for yourself or for the group, with no restrictions on order value we dont want our customers to be in any restriction 😎😎" />
                <HomeCard title="Eateries in your wallet" text="The brand-new KhanSama lets you track orders from your favourite eateries while you're on the road. ❤️ " />
            </div>
            <DownPart />
        </div>
    )
}

export default Home
