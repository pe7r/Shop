import React, { Component } from 'react'
import './Filter.scss'
import PropTypes from 'prop-types';
import FilterBox from '../FilterBox/FilterBox';

export default class Filter extends Component {
    state = {
        boxShow: false,
        boxChoice: []
    }

    showBox = () => {
        this.setState(prevState => {
          return {boxShow: !prevState.boxShow}
        })
    }

    handleBoxChoice = (id) => {
        const { boxChoice } = this.state;
        let newList = boxChoice;
        if (boxChoice.includes(id)){
        const idx = newList.findIndex(item => item === id);
        newList = [
            ...boxChoice.slice(0, idx),
            ...boxChoice.slice(idx + 1)
        ]
        } else if (!boxChoice.includes(id)) {
        newList.push(id)
        }
        this.setState({
            boxChoice: newList
        })
    }

    applyChanges = () => {
        const {pushFilters, closeFilter, name} = this.props;
        const {boxChoice} = this.state;
        pushFilters(boxChoice, name)
        closeFilter()
    }

    clearBoxChoice = () => {
        const {pushFilters, closeFilter, name} = this.props;
        this.setState({
            boxChoice: []
        })
        pushFilters([], name)
        closeFilter()
    }

    render() {
        const { 
            filterData,
            chooseFilter,
            active,
            name,
            hideFilters
        } = this.props;

        const { boxChoice } = this.state;

        const filterBox = filterData.map(filter => {
            let boxActive = '';
            if (boxChoice.includes(filter.id)) {
                boxActive = 'box__active'
            }
            return <FilterBox filter={filter}
                              key={filter.title}
                              parent={name}
                              boxActive={boxActive}
                              handleBoxChoice={this.handleBoxChoice}/>
        })
        return (
            <div className={`filter__container${hideFilters}`}>
                <button 
                    className={`filter__button`}
                    name={name}
                    onClick={() => {
                        this.showBox()
                        chooseFilter(name)
                        }}> 
                    {name}
                </button>
                <div>
                <div className={`filter__box ${active}`}>
                    <div className="filter__box-container">
                        <div className="filter__box-list">
                            {filterBox}
                        </div>
                        <div className="filter__box-footer">
                            {
                                boxChoice.length >= 1 ? 
                                <button className="box__button-clear"
                                        onClick={this.clearBoxChoice}>
                                    Clear
                                </button> :
                                null
                            }
                            <button className="box__button-apply"
                                    onClick={this.applyChanges}>
                                Apply
                            </button>
                        </div>
                    </div>  
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