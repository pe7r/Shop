import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class OptionsPopupItem extends Component {
    render() {
        const {name} = this.props;
        return (
            <div className="options__item">
                <NavLink to="">{name}</NavLink>
                <span> > </span>
            </div>
        )
    }
}
