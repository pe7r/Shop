import React, { Component } from 'react'
import './Filter.scss'
import PropTypes from 'prop-types';import
FilterBox from '../FilterBox/FilterBox';

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
        console.log('boxChoice', boxChoice)
        if (boxChoice.includes(id)){
        const idx = newList.findIndex(item => item === id);
        newList = [
            ...boxChoice.slice(0, idx),
            ...boxChoice.slice(idx + 1)
        ]
        } else if (!boxChoice.includes(id)) {
        newList.push(id)
        }
        console.log('newList',newList)
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

    render() {
        const { 
            filterData,
            chooseFilter,
            active,
            name
        } = this.props;
        const filterBox = filterData.map(filter => {
            return <FilterBox filter={filter}
                              key={filter.title}
                              parent={name}
                              handleBoxChoice={this.handleBoxChoice}/>
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
                <div className={`filter__box ${active}`}>
                    <div className="filter__box--container">
                        <div className="filter__box--list">
                            {filterBox}
                        </div>
                        <button className="box__button--apply"
                           onClick={this.applyChanges}>
                            Apply
                        </button>
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