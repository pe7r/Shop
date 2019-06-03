import React, { Component } from 'react'
import './MobileButton.scss'

export default class MobileButton extends Component {
    state = {
        hiddenButton: true
    }

    doVisible = () => {
        this.setState(prevState => {
            return {hiddenButton: !prevState.hiddenButton}
        })
    }

    render() {
        const { hiddenButton } = this.state;
        const { icon, inside, handlePopupChange, popup } = this.props;
        let activeButton;
        if (!hiddenButton) {
            activeButton = 'mobutton__active'
        }

        return (
            <div>
                <button className="mobutton"
                        onClick={() => handlePopupChange(popup)}>
                    {icon}
                </button>
                <div className={`mobutton__hidden ${activeButton}`}>
                    {inside}
                    <button onClick={this.doVisible}> Close </button>
                </div>
            </div>
        )
    }
}
