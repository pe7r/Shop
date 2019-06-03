import React, { Component } from 'react'
import './Popup.scss'
import SearchInput from '../SearchInput/SearchInput';

export default class Popup extends Component {
    render() {
        const { parent, active, closePopup } = this.props;
        let inside = null;
        if (parent === 'search') {
            inside = <div>
                <SearchInput />
            </div>
        } else if (parent === 'contact') {
            inside = <div>
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
                <button onClick={closePopup}> X </button>
            </div>
        )
    }
}
