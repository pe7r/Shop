import React from 'react'
import './OptionsPopup.scss'
import {NavLink} from 'react-router-dom'

const OptionsPopup = () => {
    return (
        <div className="options__container">
            <div className="options__background"></div>
            <div className="options__main">
                <h1>Shop Area Rugs</h1>
                <div className="options__list">
                    <div className="options__item">
                        <NavLink to="">Colors</NavLink>
                    </div>
                    <div className="options__item">
                        <NavLink to="">Styles</NavLink>
                    </div>
                    <div className="options__item">
                        <NavLink to="">Sizes</NavLink>
                    </div>
                    <div className="options__item">
                        <NavLink to="">Rooms</NavLink>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default OptionsPopup
