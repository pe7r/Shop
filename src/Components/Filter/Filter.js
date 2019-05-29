import React, { Component } from 'react'
import './Filter.scss'
import PropTypes from 'prop-types';import
FilterBox from '../FilterBox/FilterBox';

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
        const { filterData, chooseFilter, active, name, handleBoxChoose, applyChanges } = this.props;
        const filterBox = filterData.map(filter => {
            return <FilterBox filter={filter}
                              key={filter.title}
                              handleBoxChoose={handleBoxChoose}/>
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
                <div>
                <div className={`filter__box ${active}`}
                    >
                   {filterBox}
                   <button className="box__button--apply"
                           onClick={applyChanges}>
                        Apply
                    </button>
                </div>
                </div>
            </div>
        )
    }
}

Filter.propTypes = {
    filterData: PropTypes.array.isRequired,
    chooseFilter: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};