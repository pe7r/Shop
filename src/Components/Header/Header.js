import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../Header/Header.scss'
import {logo, searchIcon, contactIcon, cartIcon, arrowDown, moreOptions} from '../Icons/Icons'
import SearchInput from '../SearchInput/SearchInput';
import MobileButton from '../MobileButton/MobileButton';

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
                        <SearchInput />
                    </div>
                </div>
                <div className="header__right">
                    <NavLink to="/"> Shag </NavLink>
                    <NavLink to="/"> Contemporary </NavLink>
                    <NavLink to="/"> More Styles {arrowDown} </NavLink>
                    <NavLink to="/"> Sale </NavLink>
                    <NavLink to="/products"> Shop All Rugs </NavLink>
                    <MobileButton inside={<SearchInput />}
                                  icon={searchIcon}/>
                    <button className="header__right--button">
                        {contactIcon}
                    </button>
                    <button className="header__right--button">
                        {cartIcon}
                    </button>
                    <button className="header__right--button header__hidden--button">
                        {moreOptions}
                    </button>
                </div>
            </div>
        )
    }
}
