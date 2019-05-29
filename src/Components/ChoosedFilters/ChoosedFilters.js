import React, { Component } from 'react'

export default class ChoosedFilters extends Component {
    render() {
        const choosedFilters = this.props.choosedFilters.map(filter => {
            return (
                <button key={filter}>
                    {filter}
                </button>
            )
        })
        return (
            <div>
                {choosedFilters}
            </div>
        )
    }
}
