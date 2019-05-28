import React, { Component } from 'react'
import './Filter.scss'
import PropTypes from 'prop-types';

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
        const { filterData, chooseFilter, active, name } = this.props;
        const filterBox = filterData.map(filter => {
            return <div key={filter.title} className='box__button'> {filter.title} </div>
        })
        return (
            <div>
                <button 
                    className="filter__button"
                    onClick={() => {
                        this.showBox()
                        chooseFilter(name)
                        }}> 
                    {name}
                </button>
                <div className={`filter__box ${active}`}>
                   {filterBox}
                </div>
            </div>
        )
    }
}

Filter.propTypes = {
    filterData: PropTypes.array.isRequired,
    chooseFilte: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};