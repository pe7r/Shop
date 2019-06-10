import React from 'react'
import './OptionsPopup.scss'
import {NavLink} from 'react-router-dom'
import OptionsPopupItem from '../OptionsPopupItem/OptionsPopupItem';

class OptionsPopup extends React.Component {
    state = {
        options: ['Colors', 'Styles', 'Sizes', 'Rooms']
    }

    render() {
        const { options } = this.state;

        const optionsList = options.map(option => {
            return (
                <OptionsPopupItem name={option}
                                  key={option}/>
            )
        })
        return (
            <div className="options__container">
                <div className="options__background"></div>
                <div className="options__main--container">
                    <div className="options__main">
                        <h3>Shop Area Rugs</h3>
                        <div className="options__list">
                            {optionsList}
                        </div>
                        <div className="options__info--list">
                            <div className="options__info--link">
                                <NavLink to="">60 Day Trial</NavLink>
                            </div>
                            <div className="options__info--link">
                                <NavLink to="">Reviews</NavLink>
                            </div>
                            <div className="options__info--link">
                                <NavLink to="">FAQs</NavLink>
                            </div>
                            <div className="options__info--link">
                                <NavLink to="">Shipping & Return</NavLink>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}

export default OptionsPopup
