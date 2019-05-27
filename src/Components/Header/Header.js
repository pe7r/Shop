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
                        <input placeholder="Search"></input>
                    </div>
                </div>
                <div className="header__right">
                    <a href="#"> Shag </a>
                    <a href="#"> Contemporary </a>
                    <a href="#"> More Styles {arrowDown} </a>
                    <a href="#"> Sale </a>
                    <NavLink to="/products"> Shop All Rugs </NavLink>
                    <button>{contactIcon}</button>
                    <button>{cartIcon}</button>
                </div>
            </div>
        )
    }
}
