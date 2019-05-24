import React, { Component } from 'react'
import './Filter.scss'

export default class Filter extends Component {
    state = {
        boxShow: false
    }

    showBox = () => {
        this.setState(prevState => {
          return {boxShow: !prevState.boxShow}
        })
    }

    render() {

        const filterBox = this.props.filterData.map(filter => {
            return <div key={filter.title} className='box__button'> {filter.title} </div>
        })
        return (
            <div>
                <button 
                    className="filter__button"
                    onClick={() => {
                        this.showBox()
                        this.props.chooseFilter(this.props.name)
                        }}> 
                    {this.props.name}
                </button>
                <div className={`filter__box ${this.props.active}`}>
                   {filterBox}
                </div>
            </div>
        )
    }
}
