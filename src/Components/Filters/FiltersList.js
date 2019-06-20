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

  pushFilters = (arrOfChosen, filterName) => {
    const { size, color, room, price, material, construction, style } = this.state;
    const allSelectedFilters = { size, color, room, price, material, construction, style };

    allSelectedFilters[filterName] = arrOfChosen;

    this.setState({
      [filterName]: arrOfChosen
    })
    this.props.onFilterProducts(allSelectedFilters)
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
        active = 'filter__box-active' 
      }

      let hideFilters = '';

      if (Object.keys(filtersData).indexOf(key) >= 2) {
        hideFilters = '--hideFilters'
      }
      return <Filter key={key}
                     name={key}
                     hideFilters={hideFilters}
                     filterData={filtersData[key]}
                     chooseFilter={this.chooseFilter}
                     boxShow={boxShow}
                     active={active}
                     closeFilter={this.closeFilter}
                     pushFilters={this.pushFilters}
                     callApiChange={this.callApiChange}
                     />
    });

    return (
        <section className="filters__container">
          <div className="filters__row">
            {buttons}
            <button className="filters__moreFilters-button">
              More Filters
            </button>
          </div>
          <ChoosedFilters choosedFilters={choosedFilters}
                          showFilterChoice={showFilterChoice}/>
        </section>
    )
  }
}
