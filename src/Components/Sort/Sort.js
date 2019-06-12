import React, { Component } from 'react'
import './Sort.scss'
import { sortArrowDown } from '../Icons/Icons'

export default class Sort extends Component {
    render() {
        return (
            <div className="sort__container">
                <button className="sort__button">
                    <div>Sort</div>
                    {sortArrowDown}
                </button>
            </div>
        )
    }
}
