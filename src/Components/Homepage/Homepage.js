import React from 'react'
import {NavLink} from 'react-router-dom'
import SliderPopular from '../Sliders/Popular/SliderPopular'

import './Homepage.css'

const Homepage = (props) => {
    const { productsList } = props;
    return (
            <section className='homepage__content'>
                <header>
                    <h1> Homepage </h1>
                    <div className="header__links">
                        <NavLink to="/"> Homepage </NavLink>
                        <NavLink to="/products"> Products </NavLink>
                    </div>
                </header>
                <div className="homepage__slider-row">
                    <SliderPopular 
                        productsList={ productsList }
                    />
                </div>                   
            </section>
    )
}

export default Homepage