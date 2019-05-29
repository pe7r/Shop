import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../Header/Header.scss'
import {logo, searchIcon, contactIcon, cartIcon, arrowDown} from '../Icons/Icons'

export default class Header extends Component {
    render() {
        return (
            <div className="header__container">
                <div className="header__left">
                    <div className="header__logo">
                        <NavLink to="/"> {logo} </NavLink>                    
                    </div>
                    <div className="header__search">
                        {searchIcon}
                        <input className="header__search--input" placeholder="Search"></input>
                    </div>
                </div>
                <div className="header__right">
                    <NavLink to="/"> Shag </NavLink>
                    <NavLink to="/"> Contemporary </NavLink>
                    <NavLink to="/"> More Styles {arrowDown} </NavLink>
                    <NavLink to="/"> Sale </NavLink>
                    <NavLink to="/products"> Shop All Rugs </NavLink>
                    <button>{contactIcon}</button>
                    <button>{cartIcon}</button>
                </div>
            </div>
        )
    }
}
