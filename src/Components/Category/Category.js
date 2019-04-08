import React from 'react'
import {NavLink} from 'react-router-dom'

const Category = () => {
    return (
        <section>
            <h1> Category </h1>
            <NavLink to="/"> Homepage </NavLink>
            <NavLink to="/category"> Category </NavLink>
        </section>
    )
}

export default Category