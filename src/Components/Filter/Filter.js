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
        return (
            <div>
                <button 
                    className="filter__button"
                    onClick={() => {
                        this.showBox()
                        this.props.chooseFilter(this.props.filter)
                        }}> 
                    {this.props.filter} 
                </button>
                <div className={`filter__box ${this.props.active}`}>
                    Many variants
                </div>
            </div>
        )
    }
}
