import React, { Component } from 'react'
import './Popup.scss'
import SearchInput from '../SearchInput/SearchInput';
import { closeCross, searchIcon } from '../Icons/Icons'

export default class Popup extends Component {
    render() {
        const { parent, active, closePopup } = this.props;
        let inside = null;
        if (parent === 'search') {
            inside = <div className="popup__leftside">
                <SearchInput theme="search__popup"/>
            </div>
        } else if (parent === 'contact') {
            inside = <div className="popup__leftside">
                Contact us
            </div>
        } else if (parent === 'more options') {
            inside = <div>
                <button>
                    moreOptions
                </button>
            </div>
        }
        return (
            <div className={`popup__container ${active}`}>
                {inside}
                <button onClick={closePopup} className="popup__button--close"> {closeCross} </button>
                <button className="popup__button--search">{searchIcon}</button>
            </div>
        )
    }
}
