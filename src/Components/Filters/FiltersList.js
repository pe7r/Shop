import React, { Component } from 'react'
import './FiltersList.scss'
import Filter from '../Filter/Filter';
import filtersData from '../filtersData'

export default class FiltersList extends Component {
  state = {
    setFilter: ''
  }

  chooseFilter = (id) => {
    this.setState({
      setFilter: id
    })
  }

  handleClickOutside = () => {
    this.setState({
      setFilter: ''
    })
  }

  render() {
    const {boxShow} = this.state;
    const buttons = Object.keys(filtersData).map((key) => {
      let active = '';
      if (key === this.state.setFilter) {
          active = 'filter__box--active' 
      }
      return <Filter key={key}
                     name={key}
                     filterData={filtersData[key]}
                     chooseFilter={this.chooseFilter}
                     boxShow={boxShow}
                     active={active}
                     handleClickOutside={this.handleClickOutside}
                     />
    });

    return (
        <section 
          className="filters__container"
        >
          <div className="filters__row">
            {buttons}
          </div>
        </section>
    )
  }
}
