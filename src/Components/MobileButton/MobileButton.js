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
        const { icon, inside } = this.props;
        let activeButton;
        if (!hiddenButton) {
            activeButton = 'mobutton__active'
        }

        return (
            <div>
                <button className="mobutton"
                        onClick={this.doVisible}>
                    {icon}
                </button>
                    <div className={`mobutton__hidden ${activeButton}`}>
                        {inside}
                    </div>
            </div>
        )
    }
}
