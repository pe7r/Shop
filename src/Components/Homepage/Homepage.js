import React from 'react'
import {NavLink} from 'react-router-dom'

import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <section className='homepage__content'>
                <header>
                    <h1> Homepage </h1>
                    <div className="header__links">
                        <NavLink to="/"> Homepage </NavLink>
                        <NavLink to="/products"> Products </NavLink>
                    </div>
                </header>
            </section>
        </div>
    )
}

export default Homepage