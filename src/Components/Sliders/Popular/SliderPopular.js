import React from 'react'
import {NavLink} from 'react-router-dom'

import './SliderPopular.css'

const SliderPopular = () => {
    return (
        <div className="slider__content">
            <div className='slider__row'>
                <div className="slider__header">
                    <div className="slider__title">
                        <p> Popular </p>
                    </div>
                    <div className="slider__switch">
                        <div className="slider__navlink">
                            <NavLink to="/products"> See All </NavLink>
                        </div>
                        <div className="slider__buttons">
                            <button> Prev </button>
                            <button> Next </button>
                        </div>
                    </div>
                </div>
                <div className="slider__container"></div>
            </div>
        </div>
    )
}

export default SliderPopular