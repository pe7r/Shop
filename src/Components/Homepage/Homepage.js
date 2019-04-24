import React from 'react'
import {NavLink} from 'react-router-dom'
import SliderPopular from '../Sliders/Popular/SliderPopular'

import './Homepage.css'

const Homepage = (props) => {
    return (
        <div className="homepage__container">
            <section className='homepage__content'>
                <header>
                    <h1> Homepage </h1>
                    <div className="header__links">
                        <NavLink to="/"> Homepage </NavLink>
                        <NavLink to="/products"> Products </NavLink>
                    </div>
                </header>
                <SliderPopular 
                    productsList={props.productsList}
                />
            </section>
        </div>
    )
}

export default Homepage