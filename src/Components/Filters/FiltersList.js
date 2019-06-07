import React, { Component } from 'react'
import './FiltersList.scss'
import Filter from '../Filter/Filter';
import filtersData from '../filtersData'
import ChoosedFilters from '../ChoosedFilters/ChoosedFilters'

export default class FiltersList extends Component {
  state = {
    setFilter: '',
    choosedFilters: [],
    choosed: false,
    showFilterChoice: false,
    size: [],
    color: [],
    room: [],
    price: [],
    material: [],
    construction: [],
    style: []
  }

  chooseFilter = (id) => {
    this.setState({
      setFilter: id
    })
  }

  pushFilters = (arr, filter) => {
    this.setState({
      [filter]: arr
    })
  }

  closeFilter = () => {
    this.setState({
      setFilter: ''
    })
  }

  render() {
    const {
      boxShow,
      setFilter,
      choosedFilters,
      showFilterChoice
    } = this.state;

    const buttons = Object.keys(filtersData).map((key) => {
      let active = '';
      if (key === setFilter) {
        active = 'filter__box--active' 
      }
      return <Filter key={key}
                     name={key}
                     filterData={filtersData[key]}
                     chooseFilter={this.chooseFilter}
                     boxShow={boxShow}
                     active={active}
                     closeFilter={this.closeFilter}
                     pushFilters={this.pushFilters}
                     />
    });

    return (
        <section className="filters__container">
          <div className="filters__row">
            {buttons}
          </div>
          <ChoosedFilters choosedFilters={choosedFilters}
                          showFilterChoice={showFilterChoice}/>
        </section>
    )
  }
}
