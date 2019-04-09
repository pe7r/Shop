import React from 'react'
import {NavLink} from 'react-router-dom'

import './Homepage.css'

const Homepage = () => {
    return (
        <header>
            <h1> Homepage </h1>
            <NavLink to="/"> Homepage </NavLink>
            <NavLink to="/category"> Category </NavLink>
        </header>
    )
}

export default Homepage