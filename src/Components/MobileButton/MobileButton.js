import React, { Component } from 'react'
import './MobileButton.scss'
import {closeCrossBlack} from '../Icons/Icons'

export default class MobileButton extends Component {

    doVisible = () => {
        this.setState(prevState => {
            return {hiddenButton: !prevState.hiddenButton}
        })
    }

    render() {
        const { icon, handlePopupChange, popup, closePopup, selectedPopup } = this.props;

        return (
            <div>
                {selectedPopup === 'more options' ? 
                <button className="mobutton"
                        onClick={closePopup}>
                    {closeCrossBlack}
                </button> 
                : 
                <button className="mobutton"
                        onClick={() => handlePopupChange(popup)}>
                    {icon}
                </button>}
            </div>
        )
    }
}
