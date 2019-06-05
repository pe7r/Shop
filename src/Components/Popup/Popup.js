import React, { Component } from 'react';
import './Popup.scss';
import SearchInput from '../SearchInput/SearchInput';
import { closeCross, searchIcon } from '../Icons/Icons';
import ContactPopup from '../ContactPopup/ContactPopup';

export default class Popup extends Component {
    render() {
        const { parent, active, closePopup } = this.props;

        const searchPopup = <div className="popup__leftside">
                                <SearchInput theme="search__popup"/>
                            </div>
        let inside = null;
        if (parent === 'search') {
            inside = searchPopup;
        } else if (parent === 'contact') {
            inside = <ContactPopup closePopup={closePopup}/>
        } else if (parent === 'more options') {
            inside = <div className="popup__leftside">
                <button>
                    moreOptions
                </button>
            </div>
        }
        return (
            <div className={`popup__container ${active}`}>
                {inside}
                {inside === searchPopup ? <button onClick={closePopup} className="popup__button--close"> {closeCross} </button> : null}
                {inside === searchPopup ? <button className="popup__button--search">{searchIcon}</button> : null}
            </div>
        )
    }
}
