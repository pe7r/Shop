import React, { Component } from 'react'
import './ChoosedFilters.scss'

export default class ChoosedFilters extends Component {
    render() {
        const { showFilterChoice } = this.props;
        const choosedFilters = this.props.choosedFilters.map(filter => {
            return (
                <div key={filter} className="choosed__button">
                    {filter} 
                    <button> ✖ </button>
                </div>
            )
        })
        return (
            <div className="choosed__container">
                {showFilterChoice ? choosedFilters : null}
            </div>
        )
    }
}
