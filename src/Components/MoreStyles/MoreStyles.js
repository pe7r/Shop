import React, { Component } from 'react'
import './MoreStyles.scss'
import {arrowDown} from '../Icons/Icons'
import {NavLink} from 'react-router-dom'

export default class MoreStyles extends Component {
    state = {
        styles: ['Modern', 'Kilim & Tribal', 'Vintage', 'Persian & Morrocan', 'Southwestern', 'See All Styles'],
        isStylesActive: false
    }
    render() {
        const {styles, isStylesActive} = this.state;

        const stylesList = styles.map(style => {
            return (
                <div className="morestyles__item"
                     key={style}>
                    <NavLink to="" className="morestyles__item__link"> {style} </NavLink>
                </div>
            )
        })

        let stylesActive = ''
        if (isStylesActive) {
            stylesActive = 'morestyles__active'
        }

        return (
            <div>
                <div className="morestyles__container" onClick={() => {
                    this.setState(prevState => {
                        return { isStylesActive: !prevState.isStylesActive }
                    })
                }}> More Styles {arrowDown} </div>
                <div className={`morestyles__hidden ${stylesActive}`}>
                    {stylesList}
                </div>
            </div>
        )
    }
}
