import React, { Component } from 'react'
import './ChoosedFilters.scss'

export default class ChoosedFilters extends Component {
    render() {
        const { showFilterChoice, choosedFilters } = this.props;
        const chooseFilters = choosedFilters.map(filter => {
            return (
                <div key={filter} className="choosed__button">
                    {filter} 
                    <button> ✖ </button>
                </div>
            )
        })
        return (
            <div className="choosed__container">
                {showFilterChoice ? chooseFilters : null}
            </div>
        )
    }
}
