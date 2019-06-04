import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../Header/Header.scss'
import {logo, searchIcon, contactIcon, cartIcon, arrowDown, moreOptions} from '../Icons/Icons'
import SearchInput from '../SearchInput/SearchInput';
import MobileButton from '../MobileButton/MobileButton';
import Popup from '../Popup/Popup';


export default class Header extends Component {
    state = {
        isPopupActive: false,
        selectedPopupId: ''
    }

    handlePopupChange = (id) => {
        this.setState({
            isPopupActive: true,
            selectedPopupId: id
        })
    }

    closePopup = () => {
        this.setState({
            isPopupActive: false
        })
    }

    render() {
        const { selectedPopupId, isPopupActive } = this.state;

        const moreOptionsButton = (<button className="header__right--button header__hidden--button">
                                    {moreOptions}
                                </button>)

        let activePopup = '';
        if (isPopupActive) {
            activePopup = 'popup__active';
        }
        return (
        <div>
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
                    <div className="header__links">
                        <NavLink to="/"> Shag </NavLink>
                        <NavLink to="/"> Contemporary </NavLink>
                        <NavLink to="/"> More Styles {arrowDown} </NavLink>
                        <NavLink to="/"> Sale </NavLink>
                        <NavLink to="/products"> Shop All Rugs </NavLink>
                    </div>
                    <MobileButton inside={<SearchInput />}
                                  icon={searchIcon}
                                  handlePopupChange={this.handlePopupChange}
                                  popup={'search'}
                                  />
                    <button className="header__right--button">
                        {contactIcon}
                    </button>
                    <button className="header__right--button">
                        {cartIcon}
                    </button>
                    <MobileButton inside={moreOptionsButton}
                                  icon={moreOptions}
                                  handlePopupChange={this.handlePopupChange}
                                  popup={'more options'}/>
                </div>      
            </div>
            <Popup parent={selectedPopupId}
                   active={activePopup}
                   closePopup={this.closePopup} />
        </div>
        )
    }
}
