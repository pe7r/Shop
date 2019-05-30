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
    showFilterChoice: false
  }

  chooseFilter = (id) => {
    this.setState({
      setFilter: id
    })
  }

  setChoice = () => {
    this.setState({
      showFilterChoice: true
    })
  }

  handleBoxChoose = (name) => {
    const {choosedFilters} = this.state;
    let newList = choosedFilters;
     if (choosedFilters.includes(name)){
      const idx = newList.findIndex(item => item === name);
      newList = [
        ...choosedFilters.slice(0, idx),
        ...choosedFilters.slice(idx + 1)
      ]
    } else if (!choosedFilters.includes(name)) {
      newList.push(name)
    }
    console.log(newList)

    this.setState({
      choosedFilters: newList
    })
  }

  applyChanges = () => {
    const { choosedFilters } = this.state;
    this.setChoice()
    this.setState({
      setFilter: ''
    })
    if (choosedFilters.length < 1) {
      this.setState({
        showFilterChoice: false
      })
    }
  }

  render() {
    const {boxShow, setFilter, choosedFilters, showFilterChoice} = this.state;
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
                     handleBoxChoose={this.handleBoxChoose}
                     applyChanges={this.applyChanges}
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
